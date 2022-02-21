resource "aws_iam_role" "lambda_execution" {
  name               = "vocably-${terraform.workspace}-lambda-execution"
  assume_role_policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Action": "sts:AssumeRole",
      "Principal": {
        "Service": "lambda.amazonaws.com"
      },
      "Effect": "Allow",
      "Sid": ""
    }
  ]
}
EOF
}

resource "aws_iam_policy" "lambda_execution" {
  name = "vocably-${terraform.workspace}-lambda-execution-policy"
  policy = jsonencode({
    "Version" : "2012-10-17",
    "Statement" : [
      {
        "Sid" : "DefaultLogging",
        "Effect" : "Allow",
        "Action" : [
          "logs:CreateLogGroup",
          "logs:CreateLogStream",
          "logs:PutLogEvents"
        ],
        "Resource" : "*"
      }
    ]
  })
}

resource "aws_iam_role_policy_attachment" "lambda_logging" {
  role       = aws_iam_role.lambda_execution.name
  policy_arn = aws_iam_policy.lambda_execution.arn
}

data "external" "backend_build" {
  depends_on = [local_file.backend_environment]
  program = ["bash", "-c", <<EOT
(yarn build) >&2 && echo "{\"dest\": \"dist\"}"
EOT
  ]
  working_dir = local.backend_root
}

data "archive_file" "backend_build" {
  depends_on = [
    data.external.backend_build
  ]
  type        = "zip"
  source_dir  = "${data.external.backend_build.working_dir}/${data.external.backend_build.result.dest}"
  output_path = "backend_build.zip"
}

resource "aws_api_gateway_rest_api" "rest_api" {
  name = "vocably-${terraform.workspace}-app-api"
}

resource "aws_api_gateway_authorizer" "rest_api_cognito" {
  name          = "CognitoUserPoolAuthorizer"
  type          = "COGNITO_USER_POOLS"
  rest_api_id   = aws_api_gateway_rest_api.rest_api.id
  provider_arns = [aws_cognito_user_pool.users.arn]
}

resource "aws_api_gateway_deployment" "deployment" {
  rest_api_id = aws_api_gateway_rest_api.rest_api.id
  triggers = {
    redeployment = sha1(jsonencode([
      md5(file("${path.module}/api.tf")),
      md5(file("${path.module}/api-analyze.tf")),
      md5(file("${path.module}/api-cards.tf")),
    ]))
  }
  depends_on = [
    aws_api_gateway_integration.analyze,
    aws_api_gateway_integration.put_language,
    aws_api_gateway_integration.get_language,
    aws_api_gateway_integration.delete_language,
    aws_api_gateway_integration.list_languages,
    aws_api_gateway_integration_response.put_language_200,
    aws_api_gateway_integration_response.delete_language_200,
    aws_api_gateway_integration_response.get_language_200,
    aws_api_gateway_integration_response.get_language_4xx,
    aws_api_gateway_integration_response.list_languages_200
  ]
  lifecycle {
    create_before_destroy = true
  }
}

resource "aws_api_gateway_stage" "stage" {
  deployment_id = aws_api_gateway_deployment.deployment.id
  rest_api_id   = aws_api_gateway_rest_api.rest_api.id
  stage_name    = "v1"
}

resource "aws_api_gateway_domain_name" "api" {
  certificate_arn = aws_acm_certificate.primary-global.arn
  domain_name     = local.api_domain
}

resource "aws_route53_record" "api" {
  name    = aws_api_gateway_domain_name.api.domain_name
  type    = "A"
  zone_id = data.aws_route53_zone.primary.id

  alias {
    evaluate_target_health = true
    name                   = aws_api_gateway_domain_name.api.cloudfront_domain_name
    zone_id                = aws_api_gateway_domain_name.api.cloudfront_zone_id
  }
}

resource "aws_api_gateway_base_path_mapping" "deployment" {
  api_id      = aws_api_gateway_rest_api.rest_api.id
  stage_name  = aws_api_gateway_stage.stage.stage_name
  domain_name = aws_api_gateway_domain_name.api.domain_name
}

output "app_api_url" {
  value = "https://${aws_api_gateway_domain_name.api.domain_name}"
}
