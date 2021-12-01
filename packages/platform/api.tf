locals {
  backend_root = abspath("../backend")
}

resource "aws_iam_role" "iam_for_lambda" {
  name               = "iam_for_lambda"
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

locals {
  google_key_filename = "google-key.json"
}

resource "local_file" "google_key" {
  content  = base64decode(google_service_account_key.credentials.private_key)
  filename = "${local.backend_root}/${local.google_key_filename}"
}

locals {
  backend_env_local_content = <<EOT
GOOGLE_APPLICATION_CREDENTIALS="${local.google_key_filename}"
  EOT
}

resource "local_file" "backend_env_local" {
  content  = local.backend_env_local_content
  filename = "${local.backend_root}/.env.local"
}

data "external" "backend_build" {
  depends_on = [local_file.backend_env_local]
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
  function_name    = "${terraform.workspace}-translate"
  role             = aws_iam_role.iam_for_lambda.arn
  handler          = "translate.translate"
  source_code_hash = "data.archive_file.lambda_zip.output_base64sha256"
  runtime          = "nodejs14.x"
}

resource "aws_cloudwatch_log_group" "translate" {
  name              = "/aws/lambda/${aws_lambda_function.translate.function_name}"
  retention_in_days = 14
}

resource "aws_apigatewayv2_api" "rest_api" {
  protocol_type = "HTTP"
  name          = "${terraform.workspace}-rest-api"
  body = templatefile("${local.backend_root}/api.yml", {
    translateLambdaInvokeArn = aws_lambda_function.translate.invoke_arn,
    userPoolId               = tolist(data.aws_cognito_user_pools.users.ids)[0]
    authClientId             = aws_cognito_user_pool_client.client.id
  })
  cors_configuration {
    allow_credentials = true
    allow_headers     = ["*"]
    allow_methods     = ["*"]
    allow_origins     = ["https://*", "http://*"]
  }
}

locals {
  apiGatewayMd5 = md5(file("${path.module}/api.tf"))
  apiYamlMd5    = md5(file("${local.backend_root}/api.yml"))
}

resource "aws_apigatewayv2_deployment" "deployment" {
  api_id = aws_apigatewayv2_api.rest_api.id
  triggers = {
    redeployment = "${local.apiGatewayMd5}${local.apiYamlMd5}"
  }
  lifecycle {
    create_before_destroy = true
  }
}

resource "aws_apigatewayv2_stage" "stage" {
  deployment_id = aws_apigatewayv2_deployment.deployment.id
  api_id        = aws_apigatewayv2_api.rest_api.id
  name          = "v1"
}

resource "aws_apigatewayv2_domain_name" "api" {
  domain_name = local.api_domain
  domain_name_configuration {
    certificate_arn = data.aws_acm_certificate.primary.arn
    endpoint_type   = "REGIONAL"
    security_policy = "TLS_1_2"
  }
}

resource "aws_route53_record" "example" {
  name    = aws_apigatewayv2_domain_name.api.domain_name
  type    = "A"
  zone_id = data.aws_route53_zone.primary.id

  alias {
    evaluate_target_health = true
    name                   = aws_apigatewayv2_domain_name.api.domain_name_configuration[0].target_domain_name
    zone_id                = aws_apigatewayv2_domain_name.api.domain_name_configuration[0].hosted_zone_id
  }
}

resource "aws_apigatewayv2_api_mapping" "deployment" {
  api_id      = aws_apigatewayv2_api.rest_api.id
  stage       = aws_apigatewayv2_stage.stage.name
  domain_name = aws_apigatewayv2_domain_name.api.domain_name
}

resource "aws_lambda_permission" "translate" {
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.translate.function_name
  principal     = "apigateway.amazonaws.com"
  source_arn    = "${aws_apigatewayv2_api.rest_api.execution_arn}/*/*/*"
}

output "gateway-url" {
  value = "https://${aws_apigatewayv2_domain_name.api.domain_name}"
}
