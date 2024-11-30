resource "aws_iam_role" "onboard_lambda_execution" {
  name               = "vocably-${terraform.workspace}-onboard-lambda-execution"
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

resource "aws_iam_policy" "onboard_lambda_execution" {
  name = "vocably-${terraform.workspace}-onboard-lambda-execution-policy"
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
        "Sid" : "S3UserFiles",
        "Effect" : "Allow",
        "Action" : [
          "s3:*"
        ],
        "Resource" : [
          aws_s3_bucket.user_files.arn,
          "${aws_s3_bucket.user_files.arn}/*",
        ]
      }
    ]
  })
}

resource "aws_iam_role_policy_attachment" "onboard_lambda" {
  role       = aws_iam_role.onboard_lambda_execution.name
  policy_arn = aws_iam_policy.onboard_lambda_execution.arn
}

resource "aws_lambda_function" "onboard" {
  filename         = data.archive_file.backend_build.output_path
  function_name    = "vocably-${terraform.workspace}-onboard"
  role             = aws_iam_role.onboard_lambda_execution.arn
  handler          = "onboard.onboard"
  source_code_hash = data.archive_file.backend_build.output_base64sha256
  runtime          = "nodejs18.x"
  timeout          = 10
}

resource "aws_lambda_permission" "onboard" {
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.onboard.function_name
  principal     = "apigateway.amazonaws.com"

  source_arn = "${aws_api_gateway_rest_api.rest_api.execution_arn}/*/*/*"
}

resource "aws_cloudwatch_log_group" "onboard" {
  name              = "/aws/lambda/${aws_lambda_function.onboard.function_name}"
  retention_in_days = 14
}

resource "aws_api_gateway_resource" "onboard" {
  rest_api_id = aws_api_gateway_rest_api.rest_api.id
  parent_id   = aws_api_gateway_rest_api.rest_api.root_resource_id
  path_part   = "onboard"
}

resource "aws_api_gateway_method" "onboard" {
  rest_api_id   = aws_api_gateway_rest_api.rest_api.id
  resource_id   = aws_api_gateway_resource.onboard.id
  http_method   = "POST"
  authorization = "COGNITO_USER_POOLS"
  authorizer_id = aws_api_gateway_authorizer.rest_api_cognito.id
}

module "onboard_cors" {
  source  = "squidfunk/api-gateway-enable-cors/aws"
  version = "0.3.3"

  api_id          = aws_api_gateway_rest_api.rest_api.id
  api_resource_id = aws_api_gateway_method.onboard.resource_id
}

resource "aws_api_gateway_integration" "onboard" {
  rest_api_id = aws_api_gateway_rest_api.rest_api.id
  resource_id = aws_api_gateway_method.onboard.resource_id
  http_method = aws_api_gateway_method.onboard.http_method

  integration_http_method = "POST"
  type                    = "AWS_PROXY"
  uri                     = aws_lambda_function.onboard.invoke_arn
  passthrough_behavior    = "WHEN_NO_MATCH"
}

resource "aws_cloudwatch_log_metric_filter" "onboard_error" {
  name           = "error"
  pattern        = ""
  log_group_name = aws_cloudwatch_log_group.onboard.name

  metric_transformation {
    name      = "vocably-${terraform.workspace}-onboard-error"
    namespace = "vocably-metrics"
    value     = "1"
  }
}

resource "aws_cloudwatch_metric_alarm" "onboard_error" {
  alarm_name                = "vocably-${terraform.workspace}-onboard-error"
  comparison_operator       = "GreaterThanThreshold"
  evaluation_periods        = "1"
  metric_name               = aws_cloudwatch_log_metric_filter.onboard_error.metric_transformation[0].name
  namespace                 = aws_cloudwatch_log_metric_filter.onboard_error.metric_transformation[0].namespace
  period                    = "3600"
  statistic                 = "Average"
  threshold                 = "0"
  alarm_description         = "${terraform.workspace}: onboard lambda error"
  alarm_actions             = [aws_sns_topic.alarm.arn]
  insufficient_data_actions = []
}
