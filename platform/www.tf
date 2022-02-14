locals {
  www_bucket = "vocably-${terraform.workspace}-www"
}

resource "aws_s3_bucket" "www" {
  bucket        = local.www_bucket
  force_destroy = true
}

resource "aws_s3_bucket_acl" "www" {
  bucket = aws_s3_bucket.www.bucket

  acl = "public-read"
}

resource "aws_s3_bucket_versioning" "www" {
  bucket = aws_s3_bucket.www.bucket

  versioning_configuration {
    status = "Suspended"
  }
}

resource "aws_s3_bucket_policy" "www" {
  bucket = aws_s3_bucket.www.bucket

  policy = <<EOF
{
  "Version":"2012-10-17",
  "Statement":[{
        "Sid":"PublicReadForGetBucketObjects",
        "Effect":"Allow",
          "Principal": "*",
      "Action":["s3:GetObject"],
      "Resource":["arn:aws:s3:::${local.www_bucket}/*"]
    }
  ]
}
EOF
}

resource "aws_s3_bucket_cors_configuration" "www" {
  bucket = aws_s3_bucket.www.bucket

  cors_rule {
    allowed_methods = ["GET"]
    allowed_origins = ["*"]
  }
}

resource "aws_s3_bucket_website_configuration" "www" {
  bucket = aws_s3_bucket.www.bucket

  index_document {
    suffix = "index.html"
  }
  error_document {
    key = "index.html"
  }
}

resource "aws_cloudfront_origin_access_identity" "www" {
  comment = "${local.www_bucket}-cloudfront-origin-access-identity"
}

resource "aws_cloudfront_distribution" "www" {
  origin {
    domain_name = aws_s3_bucket.www.bucket_regional_domain_name
    origin_id   = aws_s3_bucket.www.bucket_regional_domain_name

    s3_origin_config {
      origin_access_identity = aws_cloudfront_origin_access_identity.www.cloudfront_access_identity_path
    }
  }

  enabled             = true
  is_ipv6_enabled     = true
  default_root_object = "index.html"

  aliases = [var.root_domain]

  default_cache_behavior {
    allowed_methods        = ["HEAD", "GET"]
    cached_methods         = ["HEAD", "GET"]
    target_origin_id       = aws_s3_bucket.www.bucket_regional_domain_name
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

resource "aws_route53_record" "www" {
  zone_id = data.aws_route53_zone.primary.zone_id
  name    = data.aws_route53_zone.primary.name
  type    = "A"

  alias {
    name                   = aws_cloudfront_distribution.www.domain_name
    zone_id                = aws_cloudfront_distribution.www.hosted_zone_id
    evaluate_target_health = false
  }
}

resource "aws_s3_object" "www" {
  for_each     = fileset(local.www_root, "**/*.*")
  bucket       = aws_s3_bucket.www.bucket
  key          = each.value
  source       = "${local.www_root}/${each.value}"
  acl          = "public-read"
  etag         = filemd5("${local.www_root}/${each.value}")
  content_type = lookup(local.mime_types, split(".", each.value)[length(split(".", each.value)) - 1])
}
