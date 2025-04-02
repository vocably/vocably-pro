resource "aws_lambda_function" "generate_mnemonic" {
  filename         = data.archive_file.backend_build.output_path
  function_name    = "vocably-${terraform.workspace}-generate-mnemonic"
  role             = aws_iam_role.lambda_execution.arn
  handler          = "generate-mnemonic.generateMnemonic"
  source_code_hash = data.archive_file.backend_build.output_base64sha256
  runtime          = "nodejs18.x"
  timeout          = 10
}

resource "aws_lambda_permission" "generate_mnemonic" {
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.generate_mnemonic.function_name
  principal     = "apigateway.amazonaws.com"

  source_arn = "${aws_api_gateway_rest_api.rest_api.execution_arn}/*/*/*"
}

resource "aws_cloudwatch_log_group" "generate_mnemonic" {
  name              = "/aws/lambda/${aws_lambda_function.generate_mnemonic.function_name}"
  retention_in_days = 14
}

resource "aws_api_gateway_resource" "generate_mnemonic" {
  rest_api_id = aws_api_gateway_rest_api.rest_api.id
  parent_id   = aws_api_gateway_rest_api.rest_api.root_resource_id
  path_part   = "generate-mnemonic"
}

resource "aws_api_gateway_method" "generate_mnemonic" {
  rest_api_id   = aws_api_gateway_rest_api.rest_api.id
  resource_id   = aws_api_gateway_resource.generate_mnemonic.id
  http_method   = "POST"
  authorization = "COGNITO_USER_POOLS"
  authorizer_id = aws_api_gateway_authorizer.rest_api_cognito.id
}

module "generate_mnemonic_cors" {
  source  = "squidfunk/api-gateway-enable-cors/aws"
  version = "0.3.3"

  api_id          = aws_api_gateway_rest_api.rest_api.id
  api_resource_id = aws_api_gateway_method.generate_mnemonic.resource_id
}

resource "aws_api_gateway_integration" "generate_mnemonic" {
  rest_api_id = aws_api_gateway_rest_api.rest_api.id
  resource_id = aws_api_gateway_method.generate_mnemonic.resource_id
  http_method = aws_api_gateway_method.generate_mnemonic.http_method

  integration_http_method = "POST"
  type                    = "AWS_PROXY"
  uri                     = aws_lambda_function.generate_mnemonic.invoke_arn
  passthrough_behavior    = "WHEN_NO_MATCH"
}

