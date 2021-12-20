resource "aws_dynamodb_table" "emails" {
  name         = "emails"
  billing_mode = "PAY_PER_REQUEST"
  hash_key     = "id"
  attribute {
    name = "id"
    type = "S"
  }
}

resource "aws_iam_role" "save_email_lambda" {
  name               = "RootSaveEmailLambda"
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

resource "aws_iam_policy" "logs" {
  name = "RootLambdaLogsPolicy"
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

resource "aws_iam_policy" "save_email" {
  name = "RootLambdaSaveEmailsPolicy"
  policy = jsonencode({
    "Version" : "2012-10-17",
    "Statement" : [
      {
        "Sid" : "SaveEmails",
        "Effect" : "Allow",
        "Action" : [
          "dynamodb:PutItem"
        ],
        "Resource" : aws_dynamodb_table.emails.arn
      }
    ]
  })
}

resource "aws_iam_role_policy_attachment" "save_emails_lambda_logging" {
  role       = aws_iam_role.save_email_lambda.name
  policy_arn = aws_iam_policy.logs.arn
}

resource "aws_iam_role_policy_attachment" "save_emails_db" {
  role       = aws_iam_role.save_email_lambda.name
  policy_arn = aws_iam_policy.save_email.arn
}

data "external" "www_backend_build" {
  depends_on = [local_file.www_backend_environment]
  program = ["bash", "-c", <<EOT
(yarn build) >&2 && echo "{\"dest\": \"dist\"}"
EOT
  ]
  working_dir = local.www_backed_root
}

data "archive_file" "www_backend_build" {
  depends_on = [
    data.external.www_backend_build
  ]
  type        = "zip"
  source_dir  = "${data.external.www_backend_build.working_dir}/${data.external.www_backend_build.result.dest}"
  output_path = "www_backend_build.zip"
}

resource "aws_lambda_function" "save_email" {
  filename         = data.archive_file.www_backend_build.output_path
  function_name    = "save_email"
  role             = aws_iam_role.save_email_lambda.arn
  handler          = "saveEmail.saveEmail"
  source_code_hash = "data.archive_file.lambda_zip.output_base64sha256"
  runtime          = "nodejs14.x"
}

resource "aws_cloudwatch_log_group" "save_email" {
  name              = "/aws/lambda/${aws_lambda_function.save_email.function_name}"
  retention_in_days = 14
}

resource "aws_apigatewayv2_api" "api" {
  name          = "root_api"
  protocol_type = "HTTP"
}

resource "aws_apigatewayv2_stage" "api" {
  api_id = aws_apigatewayv2_api.api.id

  name        = "root_api_stage"
  auto_deploy = true

  access_log_settings {
    destination_arn = aws_cloudwatch_log_group.api_gw.arn

    format = jsonencode({
      requestId               = "$context.requestId"
      sourceIp                = "$context.identity.sourceIp"
      requestTime             = "$context.requestTime"
      protocol                = "$context.protocol"
      httpMethod              = "$context.httpMethod"
      resourcePath            = "$context.resourcePath"
      routeKey                = "$context.routeKey"
      status                  = "$context.status"
      responseLength          = "$context.responseLength"
      integrationErrorMessage = "$context.integrationErrorMessage"
      }
    )
  }
}

resource "aws_apigatewayv2_integration" "save_email" {
  api_id = aws_apigatewayv2_api.api.id

  integration_uri    = aws_lambda_function.save_email.invoke_arn
  integration_type   = "AWS_PROXY"
  integration_method = "POST"
}

resource "aws_apigatewayv2_route" "save_email" {
  api_id = aws_apigatewayv2_api.api.id

  route_key = "POST /email"
  target    = "integrations/${aws_apigatewayv2_integration.save_email.id}"
}

resource "aws_cloudwatch_log_group" "api_gw" {
  name = "/aws/api_gw/${aws_apigatewayv2_api.api.name}"

  retention_in_days = 30
}

resource "aws_lambda_permission" "api_gw" {
  statement_id  = "AllowExecutionFromAPIGateway"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.save_email.function_name
  principal     = "apigateway.amazonaws.com"

  source_arn = "${aws_apigatewayv2_api.api.execution_arn}/*/*"
}

resource "aws_apigatewayv2_domain_name" "api" {
  domain_name = local.backend_domain
  domain_name_configuration {
    certificate_arn = aws_acm_certificate.primary.arn
    endpoint_type   = "REGIONAL"
    security_policy = "TLS_1_2"
  }
}

resource "aws_route53_record" "api" {
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
  api_id      = aws_apigatewayv2_api.api.id
  stage       = aws_apigatewayv2_stage.api.name
  domain_name = aws_apigatewayv2_domain_name.api.domain_name
}

output "root_gateway_url" {
  value = "https://${aws_apigatewayv2_domain_name.api.domain_name}"
}
