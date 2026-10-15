terraform {
  backend "s3" {
    bucket         = "vocably-dev-tf-state"
    region         = "eu-central-1"
    key            = "vocably"
    dynamodb_table = "vocably-dev-tf-state-lock"
    encrypt        = true
  }

  required_providers {
    aws = {
      source = "hashicorp/aws"
      # v6.69.0 regression: "decomposing response: bufio.Scanner: token too long"
      # breaks aws_cognito_managed_login_branding reads.
      # https://github.com/hashicorp/terraform-provider-aws/issues/50481
      version = "~> 6.0, < 6.69.0"
    }
  }
}

provider "aws" {
  region = "eu-central-1"
}

provider "aws" {
  alias  = "global"
  region = "us-east-1"
}

provider "google" {
  region  = "europe-central2"
  project = var.gcloud_project_id
}
