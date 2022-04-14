data "aws_region" "current" {}

locals {
  api_base_url = "https://${aws_api_gateway_domain_name.api.domain_name}"
}

locals {
  app_env_content = <<EOT
export const environmentLocal = {
  chromeExtensionId: '${var.extension_id}',
  paddle: {
    sandbox: ${var.paddle_sandbox ? "true" : "false"},
    vendorId: ${var.paddle_vendor_id},
    subscriptionProducts: ${jsonencode(var.paddle_subscription_products)},
  },
  auth: {
    region: '${data.aws_region.current.name}',
    userPoolId: '${aws_cognito_user_pool.users.id}',
    userPoolWebClientId: '${aws_cognito_user_pool_client.client.id}',
    oauth: {
      domain: '${local.auth_domain}',
      scope: ['email', 'profile', 'openid', 'aws.cognito.signin.user.admin'],
      responseType: 'code',
      options: {
        AdvancedSecurityDataCollectionFlag: true,
      },
    },
  },
  api: {
    baseUrl: '${local.api_base_url}',
    region: '${data.aws_region.current.name}',
    cardsBucket: '${aws_s3_bucket.cards.bucket}'
  },
};
  EOT
}

resource "local_file" "app_environment" {
  content  = local.app_env_content
  filename = "${local.app_root}/src/environments/environmentLocal.ts"
}

locals {
  extension_key_json_param = "'\"key\": \"${var.extension_key}\",'"
}

locals {
  extension_env_content = <<EOT
NAME="${var.extension_name}"
KEY=${var.extension_key != "" ? local.extension_key_json_param : "\"\""}
AUTH_REGION="${data.aws_region.current.name}"
AUTH_USER_POOL_ID="${aws_cognito_user_pool.users.id}"
AUTH_USER_POOL_WEB_CLIENT_ID="${aws_cognito_user_pool_client.client.id}"
APP_BASE_URL="${local.app_url}"
API_BASE_URL="${local.api_base_url}"
API_REGION="${data.aws_region.current.name}"
API_CARDS_BUCKET="${aws_s3_bucket.cards.bucket}"
  EOT
}

resource "local_file" "extension_environment" {
  content  = local.extension_env_content
  filename = "${local.extension_root}/.env.local"
}

locals {
  google_key_filename = "google-key.json"
}

resource "local_file" "google_key" {
  content  = base64decode(google_service_account_key.credentials.private_key)
  filename = "${local.backend_root}/${local.google_key_filename}"
}

locals {
  backend_env_content = <<EOT
GOOGLE_APPLICATION_CREDENTIALS="${local.google_key_filename}"
GOOGLE_PROJECT_ID="${var.gcloud_project_id}"
LEXICALA_HOST="${var.lexicala_host}"
LEXICALA_KEY="${var.lexicala_key}"
PADDLE_PUBLIC_KEY="${replace(var.paddle_public_key, "\n", "\\n")}"
CONGINOT_USER_POOL_ID="${aws_cognito_user_pool.users.id}"
CANCELLED_SUBCRIPTIONS_TABLE="${aws_dynamodb_table.cancelled_subscriptions.name}"
  EOT
}

resource "local_file" "backend_environment" {
  content  = local.backend_env_content
  filename = "${local.backend_root}/.env.local"
}

locals {
  backend_test_env_content = <<EOT
${local.backend_env_content}
TEST_SKIP_SPEC="false"
TEST_PADDLE_ENV="${var.paddle_test_env}"
  EOT
}

resource "local_file" "backend_test_environment" {
  content  = local.backend_test_env_content
  filename = "${local.backend_root}/.env.test.local"
}

locals {
  www_backend_env_content = <<EOT
EMAILS_TABLE="${aws_dynamodb_table.emails.name}"
  EOT
}

resource "local_file" "www_backend_environment" {
  content  = local.www_backend_env_content
  filename = "${local.www_backed_root}/.env.local"
}

locals {
  e2e_environment_content = <<EOT
USERNAME="${var.test_user_username}"
PASSWORD="${var.test_user_password}"
AWS_REGION="${data.aws_region.current.name}"
USER_POOL_ID="${aws_cognito_user_pool.users.id}"
USER_POOL_WEB_CLIENT_ID="${aws_cognito_user_pool_client.client.id}"
  EOT
}

resource "local_file" "e2e_environment" {
  content  = local.e2e_environment_content
  filename = "${local.e2e_root}/.env.local"
}

locals {
  extension_popup_env_content = <<EOT
export const environmentLocal = {
  appBaseUrl: '${local.app_url}',
};
  EOT
}

resource "local_file" "extension_popup_environment" {
  content  = local.extension_popup_env_content
  filename = "${local.extension_popup_root}/src/environments/environmentLocal.ts"
}
