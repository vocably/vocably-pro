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

resource "aws_api_gateway_resource" "translate" {
  rest_api_id = aws_api_gateway_rest_api.rest_api.id
  parent_id   = aws_api_gateway_rest_api.rest_api.root_resource_id
  path_part   = "translate"
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

resource "aws_lambda_permission" "translate" {
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.translate.function_name
  principal     = "apigateway.amazonaws.com"

  source_arn = "${aws_api_gateway_rest_api.rest_api.execution_arn}/*/*/*"
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
