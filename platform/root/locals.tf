locals {
  root_domain     = "vocably.pro"
  auth_domain     = "auth.${local.root_domain}"
  backend_domain  = "backend.${local.root_domain}"
  dev_domain      = "dev.${local.root_domain}"
  www_backed_root = abspath("../../packages/www-backend")
  www_root        = abspath("../../packages/www")
}
