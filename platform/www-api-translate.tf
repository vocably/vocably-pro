resource "aws_iam_role" "www_analyze_lambda" {
  name               = "vocably-${terraform.workspace}-www-analyze-lambda"
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

resource "aws_iam_policy" "www_analyze_lambda_logs" {
  name = "vocably-${terraform.workspace}-www-analyze-lambda-logs-policy"
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

resource "aws_iam_role_policy_attachment" "www_analyzes_lambda_logging" {
  role       = aws_iam_role.www_analyze_lambda.name
  policy_arn = aws_iam_policy.www_analyze_lambda_logs.arn
}

resource "aws_lambda_function" "www_analyze" {
  filename         = data.archive_file.www_backend_build.output_path
  function_name    = "vocably-${terraform.workspace}-www-analyze"
  role             = aws_iam_role.www_analyze_lambda.arn
  handler          = "analyze.analyze"
  source_code_hash = "data.archive_file.lambda_zip.output_base64sha256"
  runtime          = "nodejs18.x"
}

resource "aws_cloudwatch_log_group" "www_analyze" {
  name              = "/aws/lambda/${aws_lambda_function.www_analyze.function_name}"
  retention_in_days = 14
}

resource "aws_apigatewayv2_integration" "www_analyze" {
  api_id = aws_apigatewayv2_api.www_api.id

  integration_uri    = aws_lambda_function.www_analyze.invoke_arn
  integration_type   = "AWS_PROXY"
  integration_method = "POST"
}

resource "aws_apigatewayv2_route" "www_analyze" {
  api_id = aws_apigatewayv2_api.www_api.id

  route_key = "GET /analyze"
  target    = "integrations/${aws_apigatewayv2_integration.www_analyze.id}"
}

resource "aws_lambda_permission" "www_analyze" {
  statement_id  = "AllowExecutionFromAPIGateway"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.www_analyze.function_name
  principal     = "apigateway.amazonaws.com"

  source_arn = "${aws_apigatewayv2_api.www_api.execution_arn}/*/*"
}
