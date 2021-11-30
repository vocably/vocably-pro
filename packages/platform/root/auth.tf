resource "aws_cognito_user_pool" "users" {
  name                     = "UserPool"
  auto_verified_attributes = ["email"]
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

resource "aws_cognito_user_pool_domain" "auth" {
  domain          = "auth.vocably.pro"
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
