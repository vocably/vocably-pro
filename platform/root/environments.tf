data "aws_region" "current" {}

locals {
  www_backend_env_content = <<EOT
EMAILS_TABLE="${aws_dynamodb_table.emails.name}"
  EOT
}

resource "local_file" "www_backend_environment" {
  content  = local.www_backend_env_content
  filename = "${local.www_backed_root}/.env.local"
}
