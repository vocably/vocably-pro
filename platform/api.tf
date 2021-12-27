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

resource "aws_apigatewayv2_api" "app_api" {
  protocol_type = "HTTP"
  name          = "vocably-${terraform.workspace}-app-api"
  body = templatefile(local.api_config, {
    translateLambdaInvokeArn = aws_lambda_function.translate.invoke_arn
    userPoolId               = aws_cognito_user_pool.users.id
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
  apiYamlMd5    = md5(file(local.api_config))
}

resource "aws_apigatewayv2_deployment" "app_api" {
  api_id = aws_apigatewayv2_api.app_api.id
  triggers = {
    redeployment = "${local.apiGatewayMd5}${local.apiYamlMd5}"
  }
  lifecycle {
    create_before_destroy = true
  }
}

resource "aws_apigatewayv2_stage" "app_api" {
  deployment_id = aws_apigatewayv2_deployment.app_api.id
  api_id        = aws_apigatewayv2_api.app_api.id
  name          = "v1"
}

resource "aws_apigatewayv2_domain_name" "app_api" {
  domain_name = local.api_domain
  domain_name_configuration {
    certificate_arn = aws_acm_certificate.primary.arn
    endpoint_type   = "REGIONAL"
    security_policy = "TLS_1_2"
  }
  depends_on = [aws_acm_certificate_validation.primary]
}

resource "aws_route53_record" "app_api" {
  name    = aws_apigatewayv2_domain_name.app_api.domain_name
  type    = "A"
  zone_id = data.aws_route53_zone.primary.id

  alias {
    evaluate_target_health = true
    name                   = aws_apigatewayv2_domain_name.www_api.domain_name_configuration[0].target_domain_name
    zone_id                = aws_apigatewayv2_domain_name.www_api.domain_name_configuration[0].hosted_zone_id
  }
}

resource "aws_apigatewayv2_api_mapping" "app_api" {
  api_id      = aws_apigatewayv2_api.app_api.id
  stage       = aws_apigatewayv2_stage.app_api.name
  domain_name = aws_apigatewayv2_domain_name.app_api.domain_name
}

resource "aws_lambda_permission" "translate" {
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.translate.function_name
  principal     = "apigateway.amazonaws.com"
  source_arn    = "${aws_apigatewayv2_api.app_api.execution_arn}/*/*/*"
}

output "app_api_url" {
  value = "https://${aws_apigatewayv2_domain_name.app_api.domain_name}"
}
