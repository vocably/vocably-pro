terraform {
  backend "s3" {
    encrypt = true
    bucket  = "vocably-platform"
    key     = "platform"
    region  = "eu-central-1"
  }
}

provider "aws" {
  region = "eu-central-1"
}
