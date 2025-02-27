resource "aws_iam_role" "notification_time_lambda_execution" {
  name               = "vocably-${terraform.workspace}-notification-time-lambda-execution"
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

resource "aws_iam_policy" "notification_time_lambda_execution" {
  name = "vocably-${terraform.workspace}-notification-time-lambda-execution-policy"
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
        "Sid" : "DynamoNotifications",
        "Effect" : "Allow",
        "Action" : [
          "dynamodb:Get*",
          "dynamodb:UpdateItem",
          "dynamodb:Query",
          "dynamodb:Scan",
          "dynamodb:DeleteItem"
        ],
        "Resource" : "${aws_dynamodb_table.notifications.arn}*"
      },
    ]
  })
}

resource "aws_iam_role_policy_attachment" "notification_time_lambda" {
  role       = aws_iam_role.notification_time_lambda_execution.name
  policy_arn = aws_iam_policy.notification_time_lambda_execution.arn
}

resource "aws_api_gateway_resource" "notification_time" {
  rest_api_id = aws_api_gateway_rest_api.rest_api.id
  parent_id   = aws_api_gateway_rest_api.rest_api.root_resource_id
  path_part   = "notification-time"
}

module "notification_time_cors" {
  source  = "squidfunk/api-gateway-enable-cors/aws"
  version = "0.3.3"

  api_id          = aws_api_gateway_rest_api.rest_api.id
  api_resource_id = aws_api_gateway_resource.notification_time.id
}

// Get notification time

resource "aws_lambda_function" "get_notification_time" {
  filename         = data.archive_file.backend_build.output_path
  function_name    = "vocably-${terraform.workspace}-get-notification-time"
  role             = aws_iam_role.notification_time_lambda_execution.arn
  handler          = "get-notification-time.getNotificationTime"
  source_code_hash = data.archive_file.backend_build.output_base64sha256
  runtime          = "nodejs18.x"
  timeout          = 10
}

resource "aws_lambda_permission" "get_notification_time" {
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.get_notification_time.function_name
  principal     = "apigateway.amazonaws.com"

  source_arn = "${aws_api_gateway_rest_api.rest_api.execution_arn}/*/*/*"
}

resource "aws_cloudwatch_log_group" "get_notification_time" {
  name              = "/aws/lambda/${aws_lambda_function.get_notification_time.function_name}"
  retention_in_days = 14
}

resource "aws_api_gateway_method" "get_notification_time" {
  rest_api_id   = aws_api_gateway_rest_api.rest_api.id
  resource_id   = aws_api_gateway_resource.notification_time.id
  http_method   = "GET"
  authorization = "COGNITO_USER_POOLS"
  authorizer_id = aws_api_gateway_authorizer.rest_api_cognito.id
}

resource "aws_api_gateway_integration" "get_notification_time" {
  rest_api_id = aws_api_gateway_rest_api.rest_api.id
  resource_id = aws_api_gateway_method.get_notification_time.resource_id
  http_method = aws_api_gateway_method.get_notification_time.http_method

  integration_http_method = "POST"
  type                    = "AWS_PROXY"
  uri                     = aws_lambda_function.get_notification_time.invoke_arn
  passthrough_behavior    = "WHEN_NO_MATCH"
}

resource "aws_cloudwatch_log_metric_filter" "get_notification_time_error" {
  name           = "error"
  pattern        = "error"
  log_group_name = aws_cloudwatch_log_group.get_notification_time.name

  metric_transformation {
    name      = "vocably-${terraform.workspace}-get-notification-time-error"
    namespace = "vocably-metrics"
    value     = "1"
  }
}

resource "aws_cloudwatch_metric_alarm" "get_notification_time_error" {
  alarm_name                = "vocably-${terraform.workspace}-get-notification-time-error"
  comparison_operator       = "GreaterThanThreshold"
  evaluation_periods        = "1"
  metric_name               = aws_cloudwatch_log_metric_filter.get_notification_time_error.metric_transformation[0].name
  namespace                 = aws_cloudwatch_log_metric_filter.get_notification_time_error.metric_transformation[0].namespace
  period                    = "3600"
  statistic                 = "Average"
  threshold                 = "0"
  alarm_description         = "${terraform.workspace}: get notification time lambda error"
  alarm_actions             = [aws_sns_topic.alarm.arn]
  insufficient_data_actions = []
}


// Set notification time

resource "aws_lambda_function" "set_notification_time" {
  filename         = data.archive_file.backend_build.output_path
  function_name    = "vocably-${terraform.workspace}-set-notification-time"
  role             = aws_iam_role.notification_time_lambda_execution.arn
  handler          = "set-notification-time.setNotificationTime"
  source_code_hash = data.archive_file.backend_build.output_base64sha256
  runtime          = "nodejs18.x"
  timeout          = 10
}

resource "aws_lambda_permission" "set_notification_time" {
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.set_notification_time.function_name
  principal     = "apigateway.amazonaws.com"

  source_arn = "${aws_api_gateway_rest_api.rest_api.execution_arn}/*/*/*"
}

resource "aws_cloudwatch_log_group" "set_notification_time" {
  name              = "/aws/lambda/${aws_lambda_function.set_notification_time.function_name}"
  retention_in_days = 14
}

resource "aws_api_gateway_method" "set_notification_time" {
  rest_api_id   = aws_api_gateway_rest_api.rest_api.id
  resource_id   = aws_api_gateway_resource.notification_time.id
  http_method   = "POST"
  authorization = "COGNITO_USER_POOLS"
  authorizer_id = aws_api_gateway_authorizer.rest_api_cognito.id
}

resource "aws_api_gateway_integration" "set_notification_time" {
  rest_api_id = aws_api_gateway_rest_api.rest_api.id
  resource_id = aws_api_gateway_method.set_notification_time.resource_id
  http_method = aws_api_gateway_method.set_notification_time.http_method

  integration_http_method = "POST"
  type                    = "AWS_PROXY"
  uri                     = aws_lambda_function.set_notification_time.invoke_arn
  passthrough_behavior    = "WHEN_NO_MATCH"
}

resource "aws_cloudwatch_log_metric_filter" "set_notification_time_error" {
  name           = "error"
  pattern        = "error"
  log_group_name = aws_cloudwatch_log_group.set_notification_time.name

  metric_transformation {
    name      = "vocably-${terraform.workspace}-set-notification-time-error"
    namespace = "vocably-metrics"
    value     = "1"
  }
}

resource "aws_cloudwatch_metric_alarm" "set_notification_time_error" {
  alarm_name                = "vocably-${terraform.workspace}-set-notification-time-error"
  comparison_operator       = "GreaterThanThreshold"
  evaluation_periods        = "1"
  metric_name               = aws_cloudwatch_log_metric_filter.set_notification_time_error.metric_transformation[0].name
  namespace                 = aws_cloudwatch_log_metric_filter.set_notification_time_error.metric_transformation[0].namespace
  period                    = "3600"
  statistic                 = "Average"
  threshold                 = "0"
  alarm_description         = "${terraform.workspace}: set notification time lambda error"
  alarm_actions             = [aws_sns_topic.alarm.arn]
  insufficient_data_actions = []
}

// Delete notification time

resource "aws_lambda_function" "delete_notification_time" {
  filename         = data.archive_file.backend_build.output_path
  function_name    = "vocably-${terraform.workspace}-delete-notification-time"
  role             = aws_iam_role.notification_time_lambda_execution.arn
  handler          = "delete-notification-time.getNotificationTime"
  source_code_hash = data.archive_file.backend_build.output_base64sha256
  runtime          = "nodejs18.x"
  timeout          = 10
}

resource "aws_lambda_permission" "delete_notification_time" {
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.delete_notification_time.function_name
  principal     = "apigateway.amazonaws.com"

  source_arn = "${aws_api_gateway_rest_api.rest_api.execution_arn}/*/*/*"
}

resource "aws_cloudwatch_log_group" "delete_notification_time" {
  name              = "/aws/lambda/${aws_lambda_function.delete_notification_time.function_name}"
  retention_in_days = 14
}

resource "aws_api_gateway_method" "delete_notification_time" {
  rest_api_id   = aws_api_gateway_rest_api.rest_api.id
  resource_id   = aws_api_gateway_resource.notification_time.id
  http_method   = "DELETE"
  authorization = "COGNITO_USER_POOLS"
  authorizer_id = aws_api_gateway_authorizer.rest_api_cognito.id
}

resource "aws_api_gateway_integration" "delete_notification_time" {
  rest_api_id = aws_api_gateway_rest_api.rest_api.id
  resource_id = aws_api_gateway_method.delete_notification_time.resource_id
  http_method = aws_api_gateway_method.delete_notification_time.http_method

  integration_http_method = "POST"
  type                    = "AWS_PROXY"
  uri                     = aws_lambda_function.delete_notification_time.invoke_arn
  passthrough_behavior    = "WHEN_NO_MATCH"
}

resource "aws_cloudwatch_log_metric_filter" "delete_notification_time_error" {
  name           = "error"
  pattern        = "error"
  log_group_name = aws_cloudwatch_log_group.delete_notification_time.name

  metric_transformation {
    name      = "vocably-${terraform.workspace}-delete-notification-time-error"
    namespace = "vocably-metrics"
    value     = "1"
  }
}

resource "aws_cloudwatch_metric_alarm" "delete_notification_time_error" {
  alarm_name                = "vocably-${terraform.workspace}-delete-notification-time-error"
  comparison_operator       = "GreaterThanThreshold"
  evaluation_periods        = "1"
  metric_name               = aws_cloudwatch_log_metric_filter.delete_notification_time_error.metric_transformation[0].name
  namespace                 = aws_cloudwatch_log_metric_filter.delete_notification_time_error.metric_transformation[0].namespace
  period                    = "3600"
  statistic                 = "Average"
  threshold                 = "0"
  alarm_description         = "${terraform.workspace}: delete notification time lambda error"
  alarm_actions             = [aws_sns_topic.alarm.arn]
  insufficient_data_actions = []
}
