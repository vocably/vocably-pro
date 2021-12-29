locals {
  env_domain = "env.${var.root_domain}"
}

data "aws_route53_zone" "primary" {
  name = var.root_domain
}

resource "aws_route53_zone" "env" {
  name = local.env_domain
}

resource "aws_route53_record" "env-ns" {
  zone_id = data.aws_route53_zone.primary.zone_id
  name    = local.env_domain
  type    = "NS"
  ttl     = "30"
  records = aws_route53_zone.env.name_servers
}

resource "aws_route53_zone" "dev" {
  name     = "dev.${aws_route53_zone.env.name}"
  provider = aws.dev
}

resource "aws_route53_record" "dev-ns" {
  zone_id = aws_route53_zone.env.zone_id
  name    = aws_route53_zone.dev.name
  type    = "NS"
  ttl     = "30"
  records = aws_route53_zone.dev.name_servers
}

resource "aws_route53_zone" "stage" {
  name = "stage.${aws_route53_zone.env.name}"
  #  provider = aws.stage
}

resource "aws_route53_record" "stage-ns" {
  zone_id = aws_route53_zone.env.zone_id
  name    = aws_route53_zone.stage.name
  type    = "NS"
  ttl     = "30"
  records = aws_route53_zone.stage.name_servers
}
