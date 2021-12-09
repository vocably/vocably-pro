locals {
  web_domain     = "web.${var.root_domain}"
  api_domain     = "api.${var.root_domain}"
  app_root       = abspath("../app")
  extension_root = abspath("../extension")
  backend_root   = abspath("../backend")
  api_config     = abspath("../api-types/api.yml")
}
