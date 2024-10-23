resource "aws_iam_role" "play_sound_lambda_execution" {
  name               = "vocably-${terraform.workspace}-play-sound-lambda-execution"
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

resource "aws_iam_policy" "play_sound_lambda_execution" {
  name = "vocably-${terraform.workspace}-play-sound-lambda-execution-policy"
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
        "Sid" : "PollyAccess",
        "Effect" : "Allow",
        "Action" : [
          "polly:SynthesizeSpeech",
        ],
        "Resource" : "*"
      }
    ]
  })
}

resource "aws_iam_role_policy_attachment" "play_sound_lambda_execution" {
  role       = aws_iam_role.play_sound_lambda_execution.name
  policy_arn = aws_iam_policy.play_sound_lambda_execution.arn
}

resource "aws_lambda_function" "play_sound" {
  filename         = data.archive_file.backend_build.output_path
  function_name    = "vocably-${terraform.workspace}-play_sound"
  role             = aws_iam_role.play_sound_lambda_execution.arn
  handler          = "play-sound.playSound"
  source_code_hash = data.archive_file.backend_build.output_base64sha256
  runtime          = "nodejs18.x"
}

resource "aws_lambda_permission" "play_sound" {
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.play_sound.function_name
  principal     = "apigateway.amazonaws.com"

  source_arn = "${aws_api_gateway_rest_api.rest_api.execution_arn}/*/*/*"
}

resource "aws_cloudwatch_log_group" "play_sound" {
  name              = "/aws/lambda/${aws_lambda_function.play_sound.function_name}"
  retention_in_days = 14
}

resource "aws_api_gateway_resource" "play_sound" {
  rest_api_id = aws_api_gateway_rest_api.rest_api.id
  parent_id   = aws_api_gateway_rest_api.rest_api.root_resource_id
  path_part   = "audio"
}

resource "aws_api_gateway_method" "play_sound" {
  rest_api_id   = aws_api_gateway_rest_api.rest_api.id
  resource_id   = aws_api_gateway_resource.play_sound.id
  http_method   = "GET"
  authorization = "COGNITO_USER_POOLS"
  authorizer_id = aws_api_gateway_authorizer.rest_api_cognito.id
}

module "play_sound_cors" {
  source  = "squidfunk/api-gateway-enable-cors/aws"
  version = "0.3.3"

  api_id          = aws_api_gateway_rest_api.rest_api.id
  api_resource_id = aws_api_gateway_method.play_sound.resource_id
}

resource "aws_api_gateway_integration" "play_sound" {
  rest_api_id = aws_api_gateway_rest_api.rest_api.id
  resource_id = aws_api_gateway_method.play_sound.resource_id
  http_method = aws_api_gateway_method.play_sound.http_method

  integration_http_method = "POST"
  type                    = "AWS_PROXY"
  uri                     = aws_lambda_function.play_sound.invoke_arn
  passthrough_behavior    = "WHEN_NO_MATCH"
}
