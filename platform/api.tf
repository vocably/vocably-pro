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

resource "aws_lambda_function" "translate" {
  filename         = data.archive_file.backend_build.output_path
  function_name    = "vocably-${terraform.workspace}-translate"
  role             = aws_iam_role.lambda_execution.arn
  handler          = "translate.translate"
  source_code_hash = "data.archive_file.lambda_zip.output_base64sha256"
  runtime          = "nodejs14.x"
}

resource "aws_cloudwatch_log_group" "translate" {
  name              = "/aws/lambda/${aws_lambda_function.translate.function_name}"
  retention_in_days = 14
}

resource "aws_api_gateway_rest_api" "rest_api" {
  name = "vocably-${terraform.workspace}-app-api"
}

resource "aws_api_gateway_resource" "translate" {
  rest_api_id = aws_api_gateway_rest_api.rest_api.id
  parent_id   = aws_api_gateway_rest_api.rest_api.root_resource_id
  path_part   = "translate"
}

resource "aws_api_gateway_authorizer" "rest_api_cognito" {
  name          = "CognitoUserPoolAuthorizer"
  type          = "COGNITO_USER_POOLS"
  rest_api_id   = aws_api_gateway_rest_api.rest_api.id
  provider_arns = [aws_cognito_user_pool.users.arn]
}

resource "aws_api_gateway_method" "translate" {
  rest_api_id   = aws_api_gateway_rest_api.rest_api.id
  resource_id   = aws_api_gateway_resource.translate.id
  http_method   = "POST"
  authorization = "COGNITO_USER_POOLS"
  authorizer_id = aws_api_gateway_authorizer.rest_api_cognito.id

  request_parameters = {
    "method.request.querystring.orgId" = true
  }
}

module "translate_cors" {
  source  = "squidfunk/api-gateway-enable-cors/aws"
  version = "0.3.3"

  api_id          = aws_api_gateway_rest_api.rest_api.id
  api_resource_id = aws_api_gateway_method.translate.resource_id
}

resource "aws_api_gateway_integration" "translate" {
  rest_api_id = aws_api_gateway_rest_api.rest_api.id
  resource_id = aws_api_gateway_method.translate.resource_id
  http_method = aws_api_gateway_method.translate.http_method

  integration_http_method = "POST"
  type                    = "AWS_PROXY"
  uri                     = aws_lambda_function.translate.invoke_arn
  passthrough_behavior    = "WHEN_NO_MATCH"
}


resource "aws_api_gateway_deployment" "deployment" {
  rest_api_id = aws_api_gateway_rest_api.rest_api.id
  triggers = {
    redeployment = md5(file("${path.module}/api.tf"))
  }
  depends_on = [aws_api_gateway_integration.translate]
  lifecycle {
    create_before_destroy = true
  }
}

resource "aws_api_gateway_stage" "stage" {
  deployment_id = aws_api_gateway_deployment.deployment.id
  rest_api_id   = aws_api_gateway_rest_api.rest_api.id
  stage_name    = "v1"
}

resource "aws_lambda_permission" "translate" {
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.translate.function_name
  principal     = "apigateway.amazonaws.com"

  source_arn = "${aws_api_gateway_rest_api.rest_api.execution_arn}/*/*/*"
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

