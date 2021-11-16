data "aws_cognito_user_pools" "users" {
  name = "UserPool"
}

resource "aws_cognito_user_pool_client" "client" {
  name                                 = "web"
  user_pool_id                         = tolist(data.aws_cognito_user_pools.users.ids)[0]
  callback_urls                        = ["https://web.vocably.pro/cb"]
  logout_urls                          = ["https://web.vocably.pro/logout"]
  allowed_oauth_flows                  = ["implicit"]
  allowed_oauth_scopes                 = ["profile", "email", "openid"]
  allowed_oauth_flows_user_pool_client = true
  supported_identity_providers         = ["Google"]
}
