provider "aws" {
  alias  = "global"
  region = "us-east-1"
}

locals {
  www_bucket = "vocably-${terraform.workspace}-www"
}

module "dev" {
  count      = local.is_dev ? 1 : 0
  source     = "./modules/dev"
  dev_root   = local.dev_domain
  www_bucket = local.www_bucket
  providers = {
    aws.main   = aws
    aws.global = aws.global
  }
}

data "aws_route53_zone" "primary" {
  name       = local.root_domain
  depends_on = [module.dev]
}

data "aws_acm_certificate" "primary" {
  domain     = "*.${local.root_domain}"
  depends_on = [module.dev]
}
