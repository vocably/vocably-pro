data "aws_route53_zone" "primary" {
  name = var.root_domain
}

data "aws_acm_certificate" "primary" {
  domain = "*.${var.root_domain}"
}
