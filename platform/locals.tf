locals {
  web_domain      = "web.${var.root_domain}"
  api_domain      = "api.${var.root_domain}"
  www_api_domain  = "www-api.${var.root_domain}"
  app_root        = abspath("../packages/app")
  extension_root  = abspath("../packages/extension")
  backend_root    = abspath("../packages/backend")
  model_root      = abspath("../packages/model")
  www_root        = abspath("../packages/www")
  www_backed_root = abspath("../packages/www-backend")
  root_www_bucket = "vocably-www"
  api_config      = abspath("${local.model_root}/api.yml")
  dev_urls        = ["http://localhost:8030", "https://oauth.pstmn.io/v1/callback"]
}
