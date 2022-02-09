data "aws_region" "current" {}

locals {
  api_base_url = "https://${aws_api_gateway_domain_name.api.domain_name}"
}

locals {
  app_env_content = <<EOT
export const environmentLocal = {
  chromeExtensionId: '${var.extension_id}',
  auth: {
    region: '${data.aws_region.current.name}',
    userPoolId: '${aws_cognito_user_pool.users.id}',
    userPoolWebClientId: '${aws_cognito_user_pool_client.client.id}',
    oauth: {
      redirectSignIn: '${local.app_url}',
      redirectSignOut: '${local.app_url}',
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
LEXICALA_USERNAME="${var.lexicala_username}"
LEXICALA_PASSWORD="${var.lexicala_password}"
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
