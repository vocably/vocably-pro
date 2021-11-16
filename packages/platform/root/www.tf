resource "aws_s3_bucket" "www" {
  bucket = data.aws_route53_zone.primary.name
  acl    = "public-read"
  policy = <<EOF
{
  "Version":"2012-10-17",
  "Statement":[{
        "Sid":"PublicReadForGetBucketObjects",
        "Effect":"Allow",
          "Principal": "*",
      "Action":["s3:GetObject"],
      "Resource":["arn:aws:s3:::${data.aws_route53_zone.primary.name}/*"]
    }
  ]
}
EOF

  force_destroy = true

  website {
    index_document = "index.html"
    error_document = "index.html"
  }
}

resource "null_resource" "deploy" {
  provisioner "local-exec" {
    command = "aws s3 sync ../../www s3://${data.aws_route53_zone.primary.name}"
  }

  depends_on = [aws_s3_bucket.www]
}

resource "aws_route53_record" "www" {
  zone_id = data.aws_route53_zone.primary.zone_id
  name    = data.aws_route53_zone.primary.name
  type    = "A"
  alias {
    name                   = aws_s3_bucket.www.website_domain
    zone_id                = aws_s3_bucket.www.hosted_zone_id
    evaluate_target_health = false
  }
}


