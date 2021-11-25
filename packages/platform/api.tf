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
  backend_env_local_content = <<EOT
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

resource "aws_api_gateway_rest_api" "rest_api" {
  name = "${terraform.workspace}-rest-api"
  body = templatefile("${local.backend_root}/api.yml", { translateLambdaArn = aws_lambda_function.translate.arn })
  endpoint_configuration {
    types = ["REGIONAL"]
  }
}

locals {
  apiGatewayMd5 = md5(file("${path.module}/api.tf"))
  apiYamlMd5    = md5(file("${local.backend_root}/api.yml"))
}

resource "aws_api_gateway_deployment" "deployment" {
  rest_api_id = aws_api_gateway_rest_api.rest_api.id
  stage_name  = "stage"
  // The below line enforces API Gateway redeployment
  // whenever api.tf file changed
  stage_description = "${local.apiGatewayMd5}${local.apiYamlMd5}"
}

resource "aws_lambda_permission" "translate" {
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.translate.function_name
  principal     = "apigateway.amazonaws.com"

  source_arn = "${aws_api_gateway_rest_api.rest_api.execution_arn}/*/*/*"
}

output "gateway-url" {
  value = aws_api_gateway_deployment.deployment.invoke_url
}
