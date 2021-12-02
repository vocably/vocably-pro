locals {
  web_domain     = "web.${var.root_domain}"
  api_domain     = "api.${var.root_domain}"
  app_root       = "../app"
  extension_root = "../extension"
}
