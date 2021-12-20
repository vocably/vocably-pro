data "aws_route53_zone" "primary" {
  name = local.root_domain
}

provider "aws" {
  alias  = "us-east-1"
  region = "us-east-1"
}

resource "aws_acm_certificate" "primary-global" {
  domain_name               = "*.${data.aws_route53_zone.primary.name}"
  subject_alternative_names = [data.aws_route53_zone.primary.name]
  validation_method         = "DNS"
  provider                  = aws.us-east-1
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
  zone_id         = data.aws_route53_zone.primary.zone_id
}

resource "aws_acm_certificate_validation" "primary-global" {
  provider                = aws.us-east-1
  certificate_arn         = aws_acm_certificate.primary-global.arn
  validation_record_fqdns = [for record in aws_route53_record.primary : record.fqdn]
}


resource "aws_acm_certificate" "primary" {
  domain_name               = "*.${data.aws_route53_zone.primary.name}"
  subject_alternative_names = [data.aws_route53_zone.primary.name]
  validation_method         = "DNS"
}

resource "aws_route53_record" "primary" {
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
  zone_id         = data.aws_route53_zone.primary.zone_id
}

resource "aws_acm_certificate_validation" "primary" {
  certificate_arn         = aws_acm_certificate.primary.arn
  validation_record_fqdns = [for record in aws_route53_record.primary : record.fqdn]
}

resource "aws_route53_zone" "dev" {
  name = local.dev_domain

  tags = {
    Environment = "dev"
  }
}

resource "aws_route53_record" "dev-ns" {
  zone_id = data.aws_route53_zone.primary.zone_id
  name    = local.dev_domain
  type    = "NS"
  ttl     = "30"
  records = aws_route53_zone.dev.name_servers
}

resource "aws_acm_certificate" "dev-global" {
  domain_name               = "*.${aws_route53_zone.dev.name}"
  subject_alternative_names = [aws_route53_zone.dev.name]
  validation_method         = "DNS"
  provider                  = aws.us-east-1
}

resource "aws_route53_record" "dev-global" {
  for_each = {
    for dvo in aws_acm_certificate.dev-global.domain_validation_options : dvo.domain_name => {
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
  zone_id         = aws_route53_zone.dev.zone_id
}

resource "aws_acm_certificate_validation" "dev-global" {
  certificate_arn         = aws_acm_certificate.dev-global.arn
  validation_record_fqdns = [for record in aws_route53_record.dev : record.fqdn]
  provider                = aws.us-east-1
}

resource "aws_acm_certificate" "dev" {
  domain_name               = "*.${aws_route53_zone.dev.name}"
  subject_alternative_names = [aws_route53_zone.dev.name]
  validation_method         = "DNS"
}

resource "aws_route53_record" "dev" {
  for_each = {
    for dvo in aws_acm_certificate.dev.domain_validation_options : dvo.domain_name => {
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
  zone_id         = aws_route53_zone.dev.zone_id
}

resource "aws_acm_certificate_validation" "dev" {
  certificate_arn         = aws_acm_certificate.dev.arn
  validation_record_fqdns = [for record in aws_route53_record.dev : record.fqdn]
}
