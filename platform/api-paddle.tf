resource "aws_lambda_function" "paddle" {
  filename         = data.archive_file.backend_build.output_path
  function_name    = "vocably-${terraform.workspace}-paddle"
  role             = aws_iam_role.lambda_execution.arn
  handler          = "paddle.paddle"
  source_code_hash = "data.archive_file.lambda_zip.output_base64sha256"
  runtime          = "nodejs14.x"
}

resource "aws_lambda_permission" "paddle" {
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.paddle.function_name
  principal     = "apigateway.amazonaws.com"

  source_arn = "${aws_api_gateway_rest_api.rest_api.execution_arn}/*/*/*"
}

resource "aws_cloudwatch_log_group" "paddle" {
  name              = "/aws/lambda/${aws_lambda_function.paddle.function_name}"
  retention_in_days = 14
}

resource "aws_api_gateway_resource" "paddle" {
  rest_api_id = aws_api_gateway_rest_api.rest_api.id
  parent_id   = aws_api_gateway_rest_api.rest_api.root_resource_id
  path_part   = "paddle"
}

resource "aws_api_gateway_method" "paddle" {
  rest_api_id   = aws_api_gateway_rest_api.rest_api.id
  resource_id   = aws_api_gateway_resource.paddle.id
  http_method   = "POST"
  authorization = "NONE"
}

module "paddle_cors" {
  source  = "squidfunk/api-gateway-enable-cors/aws"
  version = "0.3.3"

  api_id          = aws_api_gateway_rest_api.rest_api.id
  api_resource_id = aws_api_gateway_method.paddle.resource_id
}

resource "aws_api_gateway_integration" "paddle" {
  rest_api_id = aws_api_gateway_rest_api.rest_api.id
  resource_id = aws_api_gateway_method.paddle.resource_id
  http_method = aws_api_gateway_method.paddle.http_method

  integration_http_method = "POST"
  type                    = "AWS_PROXY"
  uri                     = aws_lambda_function.paddle.invoke_arn
  passthrough_behavior    = "WHEN_NO_MATCH"
}

