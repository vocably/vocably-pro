locals {
  web_domain     = "web.${var.root_domain}"
  api_domain     = "api.${var.root_domain}"
  app_root       = abspath("../packages/app")
  extension_root = abspath("../packages/extension")
  backend_root   = abspath("../packages/backend")
  model_root     = abspath("../packages/model")
  www_root       = abspath("../packages/www")
  api_config     = abspath("${local.model_root}/api.yml")
}
