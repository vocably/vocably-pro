data "aws_route53_zone" "primary" {
  name = "vocably.pro"
}

resource "aws_acm_certificate" "primary" {
  domain_name               = "*.${data.aws_route53_zone.primary.name}"
  subject_alternative_names = [data.aws_route53_zone.primary.name]
  validation_method         = "DNS"
}

resource "aws_route53_zone" "dev" {
  name = "dev.vocably.pro"

  tags = {
    Environment = "dev"
  }
}

resource "aws_route53_record" "dev-ns" {
  zone_id = data.aws_route53_zone.primary.zone_id
  name    = "dev.vocably.pro"
  type    = "NS"
  ttl     = "30"
  records = aws_route53_zone.dev.name_servers
}

resource "aws_acm_certificate" "dev" {
  domain_name               = "*.${aws_route53_zone.dev.name}"
  subject_alternative_names = [aws_route53_zone.dev.name]
  validation_method         = "DNS"
}
