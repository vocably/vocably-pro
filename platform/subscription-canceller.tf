resource "aws_dynamodb_table" "cancelled_subscriptions" {
  name         = "vocably-${terraform.workspace}-cancelled-subscriptions"
  billing_mode = "PAY_PER_REQUEST"
  hash_key     = "Username"

  attribute {
    name = "Username"
    type = "S"
  }

  attribute {
    name = "CancellationTimestamp"
    type = "N"
  }

  global_secondary_index {
    name            = "CancellationTimestampIndex"
    projection_type = "ALL"
    hash_key        = "CancellationTimestamp"
  }
}

resource "aws_iam_role" "subscription_canceller_lambda_execution" {
  name               = "vocably-${terraform.workspace}-subscription-canceller-lambda-execution"
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

resource "aws_iam_policy" "subscription_canceller_lambda_execution" {
  name = "vocably-${terraform.workspace}-subscription-canceller-lambda-execution-policy"
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
        "Sid" : "Cognito",
        "Effect" : "Allow",
        "Action" : [
          "cognito-idp:AdminUpdateUserAttributes",
          "cognito-idp:AdminAddUserToGroup",
          "cognito-idp:AdminRemoveUserFromGroup",
          "cognito-idp:AdminListGroupsForUser",
          "logs:PutLogEvents"
        ],
        "Resource" : "*"
      },
      {
        "Sid" : "SubscriptionCanceller",
        "Effect" : "Allow",
        "Action" : [
          "dynamodb:Get*",
          "dynamodb:UpdateItem",
          "dynamodb:PutItem",
          "dynamodb:DeleteItem",
          "dynamodb:Query"
        ],
        "Resource" : "${aws_dynamodb_table.cancelled_subscriptions.arn}*"
      }
    ]
  })
}

resource "aws_iam_role_policy_attachment" "subscription_canceller_lambda_execution" {
  role       = aws_iam_role.subscription_canceller_lambda_execution.name
  policy_arn = aws_iam_policy.subscription_canceller_lambda_execution.arn
}

resource "aws_lambda_function" "subscription_canceller" {
  filename         = data.archive_file.backend_build.output_path
  function_name    = "vocably-${terraform.workspace}-subscription-canceller"
  role             = aws_iam_role.subscription_canceller_lambda_execution.arn
  handler          = "subscription-canceller.subscriptionCanceller"
  source_code_hash = "data.archive_file.lambda_zip.output_base64sha256"
  runtime          = "nodejs14.x"
}

resource "aws_cloudwatch_log_group" "subscription_canceller" {
  name              = "/aws/lambda/${aws_lambda_function.subscription_canceller.function_name}"
  retention_in_days = 14
}

resource "aws_cloudwatch_event_rule" "subscription_canceller" {
  name                = "vocably-${terraform.workspace}-subscription-canceller"
  schedule_expression = "cron(5 */12 * * ? *)"
}

resource "aws_cloudwatch_event_target" "subscription_canceller" {
  arn  = aws_lambda_function.subscription_canceller.arn
  rule = aws_cloudwatch_event_rule.subscription_canceller.name
}

resource "aws_lambda_permission" "allow_cloudwatch_to_call_rw_fallout_retry_step_deletion_lambda" {
  statement_id  = "AllowExecutionFromCloudWatch"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.subscription_canceller.function_name
  principal     = "events.amazonaws.com"
  source_arn    = aws_cloudwatch_event_rule.subscription_canceller.arn
}
