resource "aws_lambda_function" "bulk_analyze" {
  filename         = data.archive_file.backend_build.output_path
  function_name    = "vocably-${terraform.workspace}-bulk-analyze"
  role             = aws_iam_role.lambda_execution.arn
  handler          = "bulk-analyze.bulkAnalyze"
  source_code_hash = data.archive_file.backend_build.output_base64sha256
  runtime          = "nodejs18.x"
  timeout          = 10
}

resource "aws_lambda_permission" "bulk_analyze" {
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.bulk_analyze.function_name
  principal     = "apigateway.amazonaws.com"

  source_arn = "${aws_api_gateway_rest_api.rest_api.execution_arn}/*/*/*"
}

resource "aws_cloudwatch_log_group" "bulk_analyze" {
  name              = "/aws/lambda/${aws_lambda_function.bulk_analyze.function_name}"
  retention_in_days = 14
}

resource "aws_api_gateway_resource" "bulk_analyze" {
  rest_api_id = aws_api_gateway_rest_api.rest_api.id
  parent_id   = aws_api_gateway_rest_api.rest_api.root_resource_id
  path_part   = "bulk-analyze"
}

resource "aws_api_gateway_method" "bulk_analyze" {
  rest_api_id   = aws_api_gateway_rest_api.rest_api.id
  resource_id   = aws_api_gateway_resource.bulk_analyze.id
  http_method   = "POST"
  authorization = "COGNITO_USER_POOLS"
  authorizer_id = aws_api_gateway_authorizer.rest_api_cognito.id
}

module "bulk_analyze_cors" {
  source  = "squidfunk/api-gateway-enable-cors/aws"
  version = "0.3.3"

  api_id          = aws_api_gateway_rest_api.rest_api.id
  api_resource_id = aws_api_gateway_method.bulk_analyze.resource_id
}

resource "aws_api_gateway_integration" "bulk_analyze" {
  rest_api_id = aws_api_gateway_rest_api.rest_api.id
  resource_id = aws_api_gateway_method.bulk_analyze.resource_id
  http_method = aws_api_gateway_method.bulk_analyze.http_method

  integration_http_method = "POST"
  type                    = "AWS_PROXY"
  uri                     = aws_lambda_function.bulk_analyze.invoke_arn
  passthrough_behavior    = "WHEN_NO_MATCH"
}

