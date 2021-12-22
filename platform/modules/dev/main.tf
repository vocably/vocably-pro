terraform {
  required_providers {
    aws = {
      source                = "hashicorp/aws"
      version               = ">= 2.7.0"
      configuration_aliases = [aws.main, aws.global]
    }
  }
}

locals {
  root_domain = "${terraform.workspace}.${var.dev_root}"
}

data "aws_route53_zone" "dev" {
  name     = var.dev_root
  provider = aws.main
}

resource "aws_route53_zone" "primary" {
  name     = local.root_domain
  provider = aws.main
}

resource "aws_route53_record" "primary-ns" {
  zone_id = data.aws_route53_zone.dev.zone_id
  name    = local.root_domain
  type    = "NS"
  ttl     = "30"
  records = aws_route53_zone.primary.name_servers
}

resource "aws_acm_certificate" "primary-global" {
  domain_name               = "*.${aws_route53_zone.primary.name}"
  subject_alternative_names = [aws_route53_zone.primary.name]
  validation_method         = "DNS"
  provider                  = aws.global
  lifecycle {
    create_before_destroy = true
  }

}

resource "aws_route53_record" "primary-global" {
  for_each = {
    for dvo in aws_acm_certificate.primary-global.domain_validation_options : dvo.domain_name => {
      name   = dvo.resource_record_name
      record = dvo.resource_record_value
      type   = dvo.resource_record_type
    }
  }

  allow_overwrite = true
  name            = each.value.name
  records         = [each.value.record]
  ttl             = 60
  type            = each.value.type
  zone_id         = aws_route53_zone.primary.zone_id
  provider        = aws.main
}

resource "aws_acm_certificate_validation" "primary-global" {
  provider                = aws.global
  certificate_arn         = aws_acm_certificate.primary-global.arn
  validation_record_fqdns = [for record in aws_route53_record.primary-global : record.fqdn]
}

resource "aws_acm_certificate" "primary" {
  provider                  = aws.main
  domain_name               = "*.${aws_route53_zone.primary.name}"
  subject_alternative_names = [aws_route53_zone.primary.name]
  validation_method         = "DNS"
}

resource "aws_route53_record" "primary" {
  provider = aws.main
  for_each = {
    for dvo in aws_acm_certificate.primary.domain_validation_options : dvo.domain_name => {
      name   = dvo.resource_record_name
      record = dvo.resource_record_value
      type   = dvo.resource_record_type
    }
  }

  allow_overwrite = true
  name            = each.value.name
  records         = [each.value.record]
  ttl             = 60
  type            = each.value.type
  zone_id         = aws_route53_zone.primary.zone_id
}

resource "aws_acm_certificate_validation" "primary" {
  provider                = aws.main
  certificate_arn         = aws_acm_certificate.primary.arn
  validation_record_fqdns = [for record in aws_route53_record.primary : record.fqdn]
}

module "www" {
  source        = "../www"
  bucket_name   = var.www_bucket
  certificate   = aws_acm_certificate.primary-global
  domain        = local.root_domain
  route_53_zone = aws_route53_zone.primary
}
