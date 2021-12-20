resource "aws_iam_role" "lambda_execution" {
  name               = "RootLambdaExecution"
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

resource "aws_iam_policy" "lambda_execution" {
  name = "RootLambdaExecutionPolicy"
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
      }
    ]
  })
}

resource "aws_dynamodb_table" "emails" {
  name         = "emails"
  billing_mode = "PAY_PER_REQUEST"
  hash_key     = "id"
  attribute {
    name = "id"
    type = "S"
  }
}

resource "aws_iam_role_policy_attachment" "lambda_logging" {
  role       = aws_iam_role.lambda_execution.name
  policy_arn = aws_iam_policy.lambda_execution.arn
}

data "external" "www_backend_build" {
  depends_on = [local_file.www_backend_environment]
  program = ["bash", "-c", <<EOT
(yarn build) >&2 && echo "{\"dest\": \"dist\"}"
EOT
  ]
  working_dir = local.www_backed_root
}

data "archive_file" "www_backend_build" {
  depends_on = [
    data.external.www_backend_build
  ]
  type        = "zip"
  source_dir  = "${data.external.www_backend_build.working_dir}/${data.external.www_backend_build.result.dest}"
  output_path = "www_backend_build.zip"
}

resource "aws_lambda_function" "save_email" {
  filename         = data.archive_file.www_backend_build.output_path
  function_name    = "save_email"
  role             = aws_iam_role.lambda_execution.arn
  handler          = "saveEmail.saveEmail"
  source_code_hash = "data.archive_file.lambda_zip.output_base64sha256"
  runtime          = "nodejs14.x"
}

resource "aws_cloudwatch_log_group" "save_email" {
  name              = "/aws/lambda/${aws_lambda_function.save_email.function_name}"
  retention_in_days = 14
}

