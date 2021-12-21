locals {
  cards_bucket_name = "vocably-${terraform.workspace}-cards"
}

resource "aws_s3_bucket" "cards" {
  bucket = local.cards_bucket_name
  acl    = "private"

  versioning {
    enabled = false
  }

  server_side_encryption_configuration {
    rule {
      apply_server_side_encryption_by_default {
        sse_algorithm = "AES256"
      }
    }
  }

  cors_rule {
    allowed_headers = ["*"]
    allowed_methods = ["PUT", "POST", "GET", "DELETE", "HEAD"]
    allowed_origins = ["*"]
  }
}
