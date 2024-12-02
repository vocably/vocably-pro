locals {
  auth_lambdas_content = <<EOT
BREVO_API_KEY="${var.brevo_api_key}"
USER_FILES_BUCKET="${aws_s3_bucket.user_files.bucket}"
  EOT
}

resource "local_file" "auth_lambdas_environment" {
  content  = local.auth_lambdas_content
  filename = "${local.auth_lambdas_root}/.env.local"
}

data "external" "auth_lambdas_build" {
  depends_on = [local_file.auth_lambdas_environment]

  program = ["bash", "-c", <<EOT
(npm run build) >&2 && echo "{\"dest\": \"dist\"}"
EOT
  ]
  working_dir = local.auth_lambdas_root
}

data "archive_file" "auth_lambdas_build" {
  depends_on = [
    data.external.auth_lambdas_build
  ]
  type        = "zip"
  source_dir  = "${data.external.auth_lambdas_build.working_dir}/${data.external.auth_lambdas_build.result.dest}"
  output_path = "auth_lambdas_build.zip"
}

resource "aws_iam_role" "auth_post_confirmation_lambda_execution" {
  name               = "vocably-${terraform.workspace}-auth_post_confirmation-lambda-execution"
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

resource "aws_iam_policy" "auth_post_confirmation_lambda_execution" {
  name = "vocably-${terraform.workspace}-auth_post_confirmation-lambda-execution-policy"
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
          "cognito-idp:AdminGetUser",
          "cognito-idp:AdminUpdateUserAttributes",
          "cognito-idp:AdminAddUserToGroup",
          "cognito-idp:AdminRemoveUserFromGroup",
          "cognito-idp:AdminListGroupsForUser",
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

resource "aws_iam_role_policy_attachment" "auth_post_confirmation_lambda_execution" {
  role       = aws_iam_role.auth_post_confirmation_lambda_execution.name
  policy_arn = aws_iam_policy.auth_post_confirmation_lambda_execution.arn
}

resource "aws_lambda_function" "auth_post_confirmation" {
  filename         = data.archive_file.auth_lambdas_build.output_path
  function_name    = "vocably-${terraform.workspace}-auth-post_confirmation"
  role             = aws_iam_role.auth_post_confirmation_lambda_execution.arn
  handler          = "auth-post-confirmation.authPostConfirmation"
  source_code_hash = data.archive_file.auth_lambdas_build.output_base64sha256
  runtime          = "nodejs18.x"
}

resource "aws_lambda_permission" "auth_post_confirmation" {
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.auth_post_confirmation.function_name
  principal     = "cognito-idp.amazonaws.com"

  source_arn = aws_cognito_user_pool.users.arn
}

resource "aws_cloudwatch_log_group" "auth_post_confirmation" {
  name              = "/aws/lambda/${aws_lambda_function.auth_post_confirmation.function_name}"
  retention_in_days = 14
}

// The rest of the auth

resource "aws_cognito_user_pool" "users" {
  name                     = "vocably-${terraform.workspace}-user-pool"
  auto_verified_attributes = ["email"]
  account_recovery_setting {
    recovery_mechanism {
      name     = "verified_email"
      priority = 1
    }
  }

  admin_create_user_config {
    allow_admin_create_user_only = true
  }

  lifecycle {
    ignore_changes = [
      schema
    ]
  }

  lambda_config {
    post_confirmation = aws_lambda_function.auth_post_confirmation.arn
  }

  schema {
    attribute_data_type = "String"
    name                = "status"
    mutable             = true
    required            = false
  }

  schema {
    attribute_data_type = "String"
    name                = "update_url"
    mutable             = true
    required            = false
  }

  schema {
    attribute_data_type = "String"
    name                = "cancel_url"
    mutable             = true
    required            = false
  }

  schema {
    attribute_data_type = "String"
    name                = "next_bill_date"
    mutable             = true
    required            = false
  }

  schema {
    attribute_data_type = "String"
    name                = "cancellation_date"
    mutable             = true
    required            = false
  }

  schema {
    attribute_data_type = "Number"
    name                = "unit_price"
    mutable             = true
    required            = false
  }

  schema {
    attribute_data_type = "Number"
    name                = "product_id"
    mutable             = true
    required            = false
  }

  schema {
    attribute_data_type = "String"
    name                = "plan_name"
    mutable             = true
    required            = false
  }
}

resource "aws_cognito_user_group" "paid" {
  name         = "paid"
  user_pool_id = aws_cognito_user_pool.users.id
  description  = "Paid customers"
}

resource "aws_cognito_identity_provider" "google" {
  user_pool_id  = aws_cognito_user_pool.users.id
  provider_name = "Google"
  provider_type = "Google"

  provider_details = {
    authorize_scopes              = "profile email openid"
    client_id                     = var.google_oauth2_client_id
    client_secret                 = var.google_oauth2_client_secret
    token_url                     = "https://www.googleapis.com/oauth2/v4/token"
    token_request_method          = "POST"
    oidc_issuer                   = "https://accounts.google.com"
    authorize_url                 = "https://accounts.google.com/o/oauth2/v2/auth"
    attributes_url                = "https://people.googleapis.com/v1/people/me?personFields="
    attributes_url_add_attributes = "true"
  }

  attribute_mapping = {
    email    = "email"
    username = "sub"
  }
}

resource "aws_cognito_identity_provider" "apple" {
  user_pool_id  = aws_cognito_user_pool.users.id
  provider_name = "SignInWithApple"
  provider_type = "SignInWithApple"

  provider_details = {
    authorize_scopes = "email name"
    client_id        = var.apple_sign_in_service_id
    team_id          = var.apple_team_id
    key_id           = var.apple_sign_in_key_id
    private_key      = var.apple_sign_in_key

    attributes_url_add_attributes = "ignored"
    authorize_url                 = "ignored"
    oidc_issuer                   = "ignored"
    token_request_method          = "ignored"
    token_url                     = "ignored"
  }

  attribute_mapping = {
    email    = "email"
    username = "sub"
    name     = "name"
  }

  lifecycle {
    ignore_changes = [
      provider_details["attributes_url_add_attributes"],
      provider_details["authorize_url"],
      provider_details["oidc_issuer"],
      provider_details["token_request_method"],
      provider_details["token_url"]
    ]
  }
}

resource "aws_cognito_user_pool_domain" "auth" {
  domain          = local.auth_domain
  certificate_arn = aws_acm_certificate.primary-global.arn
  user_pool_id    = aws_cognito_user_pool.users.id

  depends_on = [aws_route53_record.www]
}

resource "aws_route53_record" "auth-cognito-A" {
  name    = aws_cognito_user_pool_domain.auth.domain
  type    = "A"
  zone_id = data.aws_route53_zone.primary.zone_id
  alias {
    evaluate_target_health = false
    name                   = aws_cognito_user_pool_domain.auth.cloudfront_distribution_arn
    # This zone_id is fixed
    zone_id = "Z2FDTNDATAQYW2"
  }
}

locals {
  auto_sign_in_confirmation_url = "https://${local.app_domain}/${local.auto_sign_in_confirmation_path}"
  mobile_app_auth_url           = "vocably-pro://auth"
}

locals {
  available_urls = concat(["https://${local.app_domain}", local.auto_sign_in_confirmation_url, local.mobile_app_auth_url], local.dev_urls)
}

resource "aws_cognito_user_pool_client" "client" {
  name                                 = "vocably-${terraform.workspace}-web"
  user_pool_id                         = aws_cognito_user_pool.users.id
  callback_urls                        = local.available_urls
  logout_urls                          = local.available_urls
  allowed_oauth_flows                  = ["code", "implicit"]
  allowed_oauth_scopes                 = ["profile", "email", "openid", "aws.cognito.signin.user.admin"]
  allowed_oauth_flows_user_pool_client = true
  supported_identity_providers         = ["Google", "SignInWithApple"]
  depends_on                           = [aws_cognito_identity_provider.google]
}

resource "null_resource" "test_user" {

  triggers = {
    user_pool_id = aws_cognito_user_pool.users.id
  }

  provisioner "local-exec" {
    command = "aws cognito-idp admin-create-user --user-pool-id ${aws_cognito_user_pool.users.id} --username ${var.test_user_username} --user-attributes Name=email,Value=${var.test_user_email} --region ${data.aws_region.current.name}"
  }

  provisioner "local-exec" {
    command = "aws cognito-idp admin-set-user-password --user-pool-id ${aws_cognito_user_pool.users.id} --username ${var.test_user_username} --password ${var.test_user_password} --permanent --region ${data.aws_region.current.name}"
  }
}


output "auth_user_pool_id" {
  value = aws_cognito_user_pool.users.id
}

output "auth_client_id" {
  value = aws_cognito_user_pool_client.client.id
}
