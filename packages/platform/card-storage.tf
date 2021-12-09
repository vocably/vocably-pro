resource "aws_s3_bucket" "cards" {
  bucket = "vocably-${terraform.workspace}-cards"
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
}
