resource "aws_iam_role" "push_token_lambda_execution" {
  name               = "vocably-${terraform.workspace}-push-token-lambda-execution"
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

resource "aws_iam_policy" "push_token_lambda_execution" {
  name = "vocably-${terraform.workspace}-push-token-lambda-execution-policy"
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
      },
      {
        "Sid" : "DynamoPushTokens",
        "Effect" : "Allow",
        "Action" : [
          "dynamodb:PutItem",
        ],
        "Resource" : "${aws_dynamodb_table.push_tokens.arn}*"
      },
    ]
  })
}

resource "aws_iam_role_policy_attachment" "push_token_lambda" {
  role       = aws_iam_role.push_token_lambda_execution.name
  policy_arn = aws_iam_policy.push_token_lambda_execution.arn
}

resource "aws_api_gateway_resource" "push_token" {
  rest_api_id = aws_api_gateway_rest_api.rest_api.id
  parent_id   = aws_api_gateway_rest_api.rest_api.root_resource_id
  path_part   = "push-token"
}

module "push_token_cors" {
  source  = "squidfunk/api-gateway-enable-cors/aws"
  version = "0.3.3"

  api_id          = aws_api_gateway_rest_api.rest_api.id
  api_resource_id = aws_api_gateway_resource.push_token.id
}

// Register push token

resource "aws_lambda_function" "register_push_token" {
  filename         = data.archive_file.backend_build.output_path
  function_name    = "vocably-${terraform.workspace}-register-push-token"
  role             = aws_iam_role.push_token_lambda_execution.arn
  handler          = "register-push-token.registerPushToken"
  source_code_hash = data.archive_file.backend_build.output_base64sha256
  runtime          = "nodejs22.x"
  timeout          = 10
}

resource "aws_lambda_permission" "register_push_token" {
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.register_push_token.function_name
  principal     = "apigateway.amazonaws.com"

  source_arn = "${aws_api_gateway_rest_api.rest_api.execution_arn}/*/*/*"
}

resource "aws_cloudwatch_log_group" "register_push_token" {
  name              = "/aws/lambda/${aws_lambda_function.register_push_token.function_name}"
  retention_in_days = 14
}

resource "aws_api_gateway_method" "register_push_token" {
  rest_api_id   = aws_api_gateway_rest_api.rest_api.id
  resource_id   = aws_api_gateway_resource.push_token.id
  http_method   = "POST"
  authorization = "COGNITO_USER_POOLS"
  authorizer_id = aws_api_gateway_authorizer.rest_api_cognito.id
}

resource "aws_api_gateway_integration" "register_push_token" {
  rest_api_id = aws_api_gateway_rest_api.rest_api.id
  resource_id = aws_api_gateway_method.register_push_token.resource_id
  http_method = aws_api_gateway_method.register_push_token.http_method

  integration_http_method = "POST"
  type                    = "AWS_PROXY"
  uri                     = aws_lambda_function.register_push_token.invoke_arn
  passthrough_behavior    = "WHEN_NO_MATCH"
}

resource "aws_cloudwatch_log_metric_filter" "register_push_token_error" {
  name           = "error"
  pattern        = "error"
  log_group_name = aws_cloudwatch_log_group.register_push_token.name

  metric_transformation {
    name      = "vocably-${terraform.workspace}-register-push-token-error"
    namespace = "vocably-metrics"
    value     = "1"
  }
}

resource "aws_cloudwatch_metric_alarm" "register_push_token_error" {
  alarm_name                = "vocably-${terraform.workspace}-register-push-token-error"
  comparison_operator       = "GreaterThanThreshold"
  evaluation_periods        = "1"
  metric_name               = aws_cloudwatch_log_metric_filter.register_push_token_error.metric_transformation[0].name
  namespace                 = aws_cloudwatch_log_metric_filter.register_push_token_error.metric_transformation[0].namespace
  period                    = "3600"
  statistic                 = "Average"
  threshold                 = "0"
  alarm_description         = "${terraform.workspace}: register push token lambda error"
  alarm_actions             = [aws_sns_topic.alarm.arn]
  insufficient_data_actions = []
}
