resource "aws_dynamodb_table" "emails" {
  name         = "vocably-${terraform.workspace}-emails"
  billing_mode = "PAY_PER_REQUEST"
  hash_key     = "id"
  attribute {
    name = "id"
    type = "S"
  }
}

data "external" "homepage_text" {
  depends_on = [data.external.www_build]
  program = ["bash", "-c", <<EOT
(node www-api-refresh-homepage-text.mjs) >&2 && echo "{\"dest\": \"dist\"}"
EOT
  ]
  working_dir = local.scripts_root
}

data "external" "www_backend_build" {
  depends_on = [local_file.www_backend_environment, data.external.homepage_text]
  program = ["bash", "-c", <<EOT
(npm run build) >&2 && echo "{\"dest\": \"dist\"}"
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


resource "aws_apigatewayv2_api" "www_api" {
  name          = "vocably-${terraform.workspace}-www-api"
  protocol_type = "HTTP"

  cors_configuration {
    allow_credentials = true
    allow_headers     = ["*"]
    allow_methods     = ["*"]
    allow_origins     = ["https://*", "http://*"]
  }
}

resource "aws_apigatewayv2_stage" "www_api" {
  api_id = aws_apigatewayv2_api.www_api.id

  name        = "v1"
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

resource "aws_cloudwatch_log_group" "api_gw" {
  name = "/aws/api_gw/${aws_apigatewayv2_api.www_api.name}"

  retention_in_days = 30
}

resource "aws_apigatewayv2_domain_name" "www_api" {
  domain_name = local.www_api_domain
  domain_name_configuration {
    certificate_arn = aws_acm_certificate.primary.arn
    endpoint_type   = "REGIONAL"
    security_policy = "TLS_1_2"
  }
  depends_on = [aws_acm_certificate_validation.primary]
}

resource "aws_route53_record" "www_api" {
  name    = aws_apigatewayv2_domain_name.www_api.domain_name
  type    = "A"
  zone_id = data.aws_route53_zone.primary.id

  alias {
    evaluate_target_health = true
    name                   = aws_apigatewayv2_domain_name.www_api.domain_name_configuration[0].target_domain_name
    zone_id                = aws_apigatewayv2_domain_name.www_api.domain_name_configuration[0].hosted_zone_id
  }
}

resource "aws_apigatewayv2_api_mapping" "www_api" {
  api_id      = aws_apigatewayv2_api.www_api.id
  stage       = aws_apigatewayv2_stage.www_api.name
  domain_name = aws_apigatewayv2_domain_name.www_api.domain_name
}

output "www_api_url" {
  value = "https://${aws_apigatewayv2_domain_name.www_api.domain_name}"
}
