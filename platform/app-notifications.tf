resource "aws_pinpoint_app" "mobile_app" {
  name = "vocably-${terraform.workspace}-mobile-app"
}

resource "aws_dynamodb_table" "notifications" {
  name         = "vocably-${terraform.workspace}-notifications"
  billing_mode = "PAY_PER_REQUEST"
  hash_key     = "ID"

  attribute {
    name = "ID"
    type = "S"
  }

  attribute {
    name = "Sub"
    type = "S"
  }

  attribute {
    name = "UTCTime"
    type = "S"
  }

  attribute {
    name = "SentTimestamp"
    type = "N"
  }

  ttl {
    attribute_name = "TTL"
    enabled        = true
  }

  global_secondary_index {
    name            = "SubIndex"
    hash_key        = "Sub"
    projection_type = "ALL"
  }

  global_secondary_index {
    name            = "UTCTimeIndex"
    hash_key        = "UTCTime"
    range_key       = "SentTimestamp"
    projection_type = "ALL"
  }
}

resource "aws_dynamodb_table" "push_tokens" {
  name         = "vocably-${terraform.workspace}-push-tokens"
  billing_mode = "PAY_PER_REQUEST"
  hash_key     = "Token"

  attribute {
    name = "Token"
    type = "S"
  }

  attribute {
    name = "Sub"
    type = "S"
  }

  ttl {
    attribute_name = "TTL"
    enabled        = true
  }

  global_secondary_index {
    name            = "SubIndex"
    hash_key        = "Sub"
    projection_type = "ALL"
  }
}

resource "aws_iam_role" "notifications_sender_lambda_execution" {
  name               = "vocably-${terraform.workspace}-notifications-sender-lambda-execution"
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

resource "aws_iam_policy" "notifications_sender_lambda_execution" {
  name = "vocably-${terraform.workspace}-notifiactions-sender-lambda-execution-policy"
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
          "dynamodb:Scan"
        ],
        "Resource" : "${aws_dynamodb_table.notifications.arn}*"
      },
      {
        "Sid" : "S3CardsAccess",
        "Effect" : "Allow",
        "Action" : [
          "s3:GetObject",
          "s3:ListBucket"
        ],
        "Resource" : "${aws_s3_bucket.cards.arn}*"
      },
      {
        "Sid" : "DynamoPushTokens",
        "Effect" : "Allow",
        "Action" : [
          "dynamodb:GetItem",
          "dynamodb:Query",
          "dynamodb:DeleteItem"
        ],
        "Resource" : "${aws_dynamodb_table.push_tokens.arn}*"
      },
      {
        "Sid" : "PinpointNotifications",
        "Effect" : "Allow",
        "Action" : [
          "mobiletargeting:SendMessages",
          // TODO: remove after Pinpoint endpoints shut down on Oct 30, 2026.
          "mobiletargeting:GetUserEndpoints"
        ],
        "Resource" : "${aws_pinpoint_app.mobile_app.arn}*"
      },
    ]
  })
}

resource "aws_iam_role_policy_attachment" "notifications_sender_lambda_execution" {
  role       = aws_iam_role.notifications_sender_lambda_execution.name
  policy_arn = aws_iam_policy.notifications_sender_lambda_execution.arn
}

resource "aws_lambda_function" "notifications_sender" {
  filename         = data.archive_file.backend_build.output_path
  function_name    = "vocably-${terraform.workspace}-notifiacations-sender"
  role             = aws_iam_role.notifications_sender_lambda_execution.arn
  handler          = "notifications-sender.notificationsSender"
  source_code_hash = data.archive_file.backend_build.output_base64sha256
  runtime          = "nodejs22.x"
  timeout          = 15
}

resource "aws_cloudwatch_log_group" "notifications_sender" {
  name              = "/aws/lambda/${aws_lambda_function.notifications_sender.function_name}"
  retention_in_days = 14
}

resource "aws_cloudwatch_event_rule" "notifications_sender" {
  name                = "vocably-${terraform.workspace}-notifications-sender"
  schedule_expression = "rate(1 minute)"
}

resource "aws_cloudwatch_event_target" "notifications_sender" {
  arn  = aws_lambda_function.notifications_sender.arn
  rule = aws_cloudwatch_event_rule.notifications_sender.name
}

resource "aws_lambda_permission" "allow_cloudwatch_to_call_notifications_sender_lambda" {
  statement_id  = "AllowExecutionFromCloudWatch"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.notifications_sender.function_name
  principal     = "events.amazonaws.com"
  source_arn    = aws_cloudwatch_event_rule.notifications_sender.arn
}
