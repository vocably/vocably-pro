locals {
  root_domain = "vocably.pro"
  auth_domain = "auth.${local.root_domain}"
  dev_domain  = "dev.${local.root_domain}"
}
