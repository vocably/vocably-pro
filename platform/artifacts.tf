locals {
  artifacts_bucket = "vocably-${terraform.workspace}-artifacts"
}
resource "aws_s3_bucket" "artifacts" {
  bucket        = local.artifacts_bucket
  force_destroy = true
}

resource "aws_s3_bucket_acl" "artifacts" {
  bucket = aws_s3_bucket.artifacts.bucket

  acl = "public-read"
}

resource "aws_s3_bucket_versioning" "artifacts" {
  bucket = aws_s3_bucket.artifacts.bucket

  versioning_configuration {
    status = "Suspended"
  }
}

resource "aws_s3_bucket_policy" "artifacts" {
  bucket = aws_s3_bucket.artifacts.bucket

  policy = <<EOF
{
  "Version":"2012-10-17",
  "Statement":[{
        "Sid":"PublicReadForGetBucketObjects",
        "Effect":"Allow",
          "Principal": "*",
      "Action":["s3:GetObject"],
      "Resource":["arn:aws:s3:::${local.artifacts_bucket}/*"]
    }
  ]
}
EOF
}

resource "aws_s3_bucket_cors_configuration" "artifacts" {
  bucket = aws_s3_bucket.artifacts.bucket

  cors_rule {
    allowed_methods = ["GET"]
    allowed_origins = ["*"]
  }
}

resource "aws_s3_bucket_website_configuration" "artifacts" {
  bucket = aws_s3_bucket.artifacts.bucket

  index_document {
    suffix = "index.html"
  }
  error_document {
    key = "index.html"
  }
}

resource "aws_s3_object" "artifacts" {
  for_each     = fileset(local.artifacts_root, "**/*.*")
  bucket       = aws_s3_bucket.artifacts.bucket
  key          = each.value
  source       = "${local.artifacts_root}/${each.value}"
  acl          = "public-read"
  etag         = filemd5("${local.artifacts_root}/${each.value}")
  content_type = lookup(local.mime_types, split(".", each.value)[length(split(".", each.value)) - 1])
}

output "artifacts_url" {
  value = "http://${aws_s3_bucket_website_configuration.artifacts.website_endpoint}"
}

output "artifacts_bucket" {
  value = aws_s3_bucket.artifacts.bucket
}
