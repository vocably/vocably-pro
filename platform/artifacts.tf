locals {
  artifacts_bucket = "vocably-${terraform.workspace}-artifacts-1"
}
resource "aws_s3_bucket" "artifacts" {
  bucket = local.artifacts_bucket
  acl    = "public-read"
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

  force_destroy = true

  versioning {
    enabled = false
  }

  website {
    index_document = "index.html"
    error_document = "index.html"
  }

  cors_rule {
    allowed_methods = ["GET"]
    allowed_origins = ["*"]
  }
}

resource "aws_s3_bucket_object" "artifacts" {
  for_each     = fileset(local.artifacts_root, "**/*.*")
  bucket       = aws_s3_bucket.artifacts.bucket
  key          = each.value
  source       = "${local.artifacts_root}/${each.value}"
  acl          = "public-read"
  etag         = filemd5("${local.artifacts_root}/${each.value}")
  content_type = lookup(local.mime_types, split(".", each.value)[length(split(".", each.value)) - 1])
}

output "artifacts_url" {
  value = "http://${aws_s3_bucket.artifacts.website_endpoint}"
}

output "artifacts_bucket" {
  value = aws_s3_bucket.artifacts.bucket
}
