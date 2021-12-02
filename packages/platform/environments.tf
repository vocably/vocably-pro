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
