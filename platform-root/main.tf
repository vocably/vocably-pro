terraform {
  cloud {
    organization = "vocably"

    workspaces {
      name = "root"
    }
  }
}

provider "aws" {
  region = "eu-central-1"
}

provider "aws" {
  alias      = "dev"
  region     = "eu-central-1"
  access_key = var.dev_access_key
  secret_key = var.dev_access_secret
}

provider "aws" {
  alias      = "stage"
  region     = "eu-central-1"
  access_key = var.stage_access_key
  secret_key = var.stage_access_secret
}
