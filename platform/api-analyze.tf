resource "aws_lambda_function" "analyze" {
  filename         = data.archive_file.backend_build.output_path
  function_name    = "vocably-${terraform.workspace}-analyze"
  role             = aws_iam_role.lambda_execution.arn
  handler          = "analyze.analyze"
  source_code_hash = "data.archive_file.lambda_zip.output_base64sha256"
  runtime          = "nodejs14.x"
}

resource "aws_lambda_permission" "analyze" {
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.analyze.function_name
  principal     = "apigateway.amazonaws.com"

  source_arn = "${aws_api_gateway_rest_api.rest_api.execution_arn}/*/*/*"
}

resource "aws_cloudwatch_log_group" "analyze" {
  name              = "/aws/lambda/${aws_lambda_function.analyze.function_name}"
  retention_in_days = 14
}

resource "aws_api_gateway_resource" "analyze" {
  rest_api_id = aws_api_gateway_rest_api.rest_api.id
  parent_id   = aws_api_gateway_rest_api.rest_api.root_resource_id
  path_part   = "analyze"
}

resource "aws_api_gateway_method" "analyze" {
  rest_api_id   = aws_api_gateway_rest_api.rest_api.id
  resource_id   = aws_api_gateway_resource.analyze.id
  http_method   = "POST"
  authorization = "COGNITO_USER_POOLS"
  authorizer_id = aws_api_gateway_authorizer.rest_api_cognito.id
}

module "analyze_cors" {
  source  = "squidfunk/api-gateway-enable-cors/aws"
  version = "0.3.3"

  api_id          = aws_api_gateway_rest_api.rest_api.id
  api_resource_id = aws_api_gateway_method.analyze.resource_id
}

resource "aws_api_gateway_integration" "analyze" {
  rest_api_id = aws_api_gateway_rest_api.rest_api.id
  resource_id = aws_api_gateway_method.analyze.resource_id
  http_method = aws_api_gateway_method.analyze.http_method

  integration_http_method = "POST"
  type                    = "AWS_PROXY"
  uri                     = aws_lambda_function.analyze.invoke_arn
  passthrough_behavior    = "WHEN_NO_MATCH"
}

resource "aws_cloudwatch_log_metric_filter" "analyze_translation_error" {
  name           = "error"
  pattern        = "?AS_IS_TRANSLATION ?LEXICALA"
  log_group_name = aws_cloudwatch_log_group.analyze.name

  metric_transformation {
    name      = "vocably-${terraform.workspace}-analyze-translation-error"
    namespace = "vocably-metrics"
    value     = "1"
  }
}

resource "aws_cloudwatch_metric_alarm" "analyze_translation_error" {
  alarm_name                = "vocably-${terraform.workspace}-translation-error"
  comparison_operator       = "GreaterThanThreshold"
  evaluation_periods        = "1"
  metric_name               = aws_cloudwatch_log_metric_filter.analyze_translation_error.metric_transformation[0].name
  namespace                 = aws_cloudwatch_log_metric_filter.analyze_translation_error.metric_transformation[0].namespace
  period                    = "3600"
  statistic                 = "Average"
  threshold                 = "0"
  alarm_description         = "${terraform.workspace}: something went wrong during the Google Translation or Lexicala translation"
  alarm_actions             = [aws_sns_topic.alarm.arn]
  insufficient_data_actions = []
}
