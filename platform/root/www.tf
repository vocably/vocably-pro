locals {
  www_bucket_name = "vocably-prod-www"
}

module "www" {
  source        = "../modules/www"
  bucket_name   = local.www_bucket_name
  certificate   = aws_acm_certificate.primary-global
  route_53_zone = data.aws_route53_zone.primary
  domain        = local.root_domain
}

output "www_bucket" {
  value = local.www_bucket_name
}


