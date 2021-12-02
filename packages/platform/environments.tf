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
