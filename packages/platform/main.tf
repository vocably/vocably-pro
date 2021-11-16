terraform {
  backend "s3" {
    bucket         = "vocably-tf-state"
    region         = "eu-central-1"
    key            = "vocably"
    dynamodb_table = "vocably-tf-state-lock"
    encrypt        = true
  }
}

provider "aws" {
  region = "eu-central-1"
}
