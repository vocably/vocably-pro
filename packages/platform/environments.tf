data "aws_region" "current" {}

locals {
  app_env_content = <<EOT
export const environmentLocal = {
  chromeExtensionId: 'cdjdmfegiddjmikilbjoaofmjmdgceib',
  auth: {
    region: '${data.aws_region.current.name}',
    userPoolId: '${tolist(data.aws_cognito_user_pools.users.ids)[0]}',
    userPoolWebClientId: '${aws_cognito_user_pool_client.client.id}',
    oauth: {
      domain: '${var.auth_domain}',
      scope: ['email', 'profile', 'openid', 'aws.cognito.signin.user.admin'],
      responseType: 'code',
      options: {
        AdvancedSecurityDataCollectionFlag: true,
      },
    },
  },
  api: {
    baseUrl: 'https://${aws_apigatewayv2_domain_name.api.domain_name}',
  },
};
  EOT
}

resource "local_file" "app_environment" {
  content  = local.app_env_content
  filename = "${local.app_root}/src/environments/environmentLocal.ts"
}

locals {
  extension_env_content = <<EOT
AUTH_REGION="${data.aws_region.current.name}"
AUTH_USER_POOL_ID="${tolist(data.aws_cognito_user_pools.users.ids)[0]}"
AUTH_USER_POOL_WEB_CLIENT_ID="${aws_cognito_user_pool_client.client.id}"
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
GOOGLE_PROJECT_ID="${var.gcloud_project}"
LEXICALA_USERNAME="${var.lexicala_username}"
LESICALA_PASSWORD="${var.lexicala_password}"
CARDS_S3_BUCKET="${aws_s3_bucket.cards.bucket_regional_domain_name}"
  EOT
}

resource "local_file" "backend_environment" {
  content  = local.backend_env_content
  filename = "${local.backend_root}/.env.local"
}
