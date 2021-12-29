terraform {
  backend "s3" {
    bucket         = "vocably-prod-tf-state"
    region         = "eu-central-1"
    key            = "vocably"
    dynamodb_table = "vocably-prod-tf-state-lock"
    encrypt        = true
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
