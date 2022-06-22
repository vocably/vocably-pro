locals {
  e2e_www_bucket = "vocably-${terraform.workspace}-e2e-www"
}
resource "aws_s3_bucket" "e2e_www" {
  bucket        = local.e2e_www_bucket
  force_destroy = true
}

resource "aws_s3_bucket_acl" "e2e_www" {
  bucket = aws_s3_bucket.e2e_www.bucket

  acl = "public-read"
}

resource "aws_s3_bucket_versioning" "e2e_www" {
  bucket = aws_s3_bucket.e2e_www.bucket

  versioning_configuration {
    status = "Suspended"
  }
}

resource "aws_s3_bucket_policy" "e2e_www" {
  bucket = aws_s3_bucket.e2e_www.bucket

  policy = <<EOF
{
  "Version":"2012-10-17",
  "Statement":[{
        "Sid":"PublicReadForGetBucketObjects",
        "Effect":"Allow",
          "Principal": "*",
      "Action":["s3:GetObject"],
      "Resource":["arn:aws:s3:::${local.e2e_www_bucket}/*"]
    }
  ]
}
EOF
}

resource "aws_s3_bucket_cors_configuration" "e2e_www" {
  bucket = aws_s3_bucket.e2e_www.bucket

  cors_rule {
    allowed_methods = ["GET"]
    allowed_origins = ["*"]
  }
}

resource "aws_s3_bucket_website_configuration" "e2e_www" {
  bucket = aws_s3_bucket.e2e_www.bucket

  index_document {
    suffix = "index.html"
  }
  error_document {
    key = "index.html"
  }
}

resource "aws_s3_object" "e2e_www" {
  for_each     = fileset(local.e2e_www_root, "**/*.*")
  bucket       = aws_s3_bucket.e2e_www.bucket
  key          = each.value
  source       = "${local.e2e_www_root}/${each.value}"
  acl          = "public-read"
  etag         = filemd5("${local.e2e_www_root}/${each.value}")
  content_type = lookup(local.mime_types, split(".", each.value)[length(split(".", each.value)) - 1])
}

output "e2e_www_url" {
  value = "http://${aws_s3_bucket_website_configuration.e2e_www.website_endpoint}"
}

output "e2e_www_bucket" {
  value = aws_s3_bucket.e2e_www.bucket
}
