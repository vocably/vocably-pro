locals {
  app_bucket = "vocably-${terraform.workspace}-app"
  app_url    = "https://${local.app_domain}"
}

resource "aws_s3_bucket" "app" {
  bucket = local.app_bucket
  acl    = "public-read"
  policy = <<EOF
{
  "Version":"2012-10-17",
  "Statement":[{
        "Sid":"PublicReadForGetBucketObjects",
        "Effect":"Allow",
          "Principal": "*",
      "Action":["s3:GetObject"],
      "Resource":["arn:aws:s3:::${local.app_bucket}/*"]
    }
  ]
}
EOF

  force_destroy = true

  versioning {
    enabled = false
  }

  website {
    index_document = "index.html"
    error_document = "index.html"
  }
}

resource "aws_cloudfront_origin_access_identity" "app" {
  comment = "${local.app_bucket}-cloudfront-origin-access-identity"
}

resource "aws_cloudfront_distribution" "app" {
  origin {
    domain_name = aws_s3_bucket.app.bucket_regional_domain_name
    origin_id   = aws_s3_bucket.app.bucket_regional_domain_name

    s3_origin_config {
      origin_access_identity = aws_cloudfront_origin_access_identity.app.cloudfront_access_identity_path
    }
  }

  enabled             = true
  is_ipv6_enabled     = true
  default_root_object = "index.html"

  aliases = [local.app_domain]

  default_cache_behavior {
    allowed_methods        = ["HEAD", "GET"]
    cached_methods         = ["HEAD", "GET"]
    target_origin_id       = aws_s3_bucket.app.bucket_regional_domain_name
    viewer_protocol_policy = "redirect-to-https"

    forwarded_values {
      query_string = false

      cookies {
        forward = "none"
      }
    }
  }

  viewer_certificate {
    acm_certificate_arn = aws_acm_certificate.primary-global.arn
    ssl_support_method  = "sni-only"
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  custom_error_response {
    error_code         = 404
    response_code      = 200
    response_page_path = "/index.html"
  }

  custom_error_response {
    error_code         = 403
    response_code      = 200
    response_page_path = "/index.html"
  }

  depends_on = [aws_acm_certificate_validation.primary-global]
}

resource "aws_route53_record" "app" {
  zone_id = data.aws_route53_zone.primary.zone_id
  name    = local.app_domain
  type    = "A"

  alias {
    name                   = aws_cloudfront_distribution.app.domain_name
    zone_id                = aws_cloudfront_distribution.app.hosted_zone_id
    evaluate_target_health = false
  }
}

data "external" "app_build" {
  depends_on = [local_file.app_environment]
  program = ["bash", "-c", <<EOT
(npm run build) >&2 && echo "{\"dest\": \"$(pwd)/dist\"}"
EOT
  ]
  working_dir = local.app_root
}

resource "null_resource" "app_upload" {
  depends_on = [
    data.external.app_build,
    aws_s3_bucket.app,
  ]

  triggers = {
    always_run = timestamp()
  }

  provisioner "local-exec" {
    command = "aws s3 sync ${data.external.app_build.result.dest}  s3://${aws_s3_bucket.app.id} --delete"
  }
}

output "app_url" {
  value = local.app_url
}
