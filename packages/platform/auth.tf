data "aws_cognito_user_pools" "users" {
  name = "UserPool"
}

locals {
  available_urls = concat(["https://${local.web_domain}"], var.dev_urls)
}

resource "aws_cognito_user_pool_client" "client" {
  name                                 = "web"
  user_pool_id                         = tolist(data.aws_cognito_user_pools.users.ids)[0]
  callback_urls                        = formatlist("%s/cb", local.available_urls)
  logout_urls                          = formatlist("%s/logout", local.available_urls)
  allowed_oauth_flows                  = ["implicit"]
  allowed_oauth_scopes                 = ["profile", "email", "openid"]
  allowed_oauth_flows_user_pool_client = true
  supported_identity_providers         = ["Google"]
}
