module "prod_state" {
  source      = "./tf-state"
  environment = "prod"
}

module "dev_state" {
  source      = "./tf-state"
  environment = "dev"
  providers = {
    aws = aws.dev
  }
}

module "stage_state" {
  source      = "./tf-state"
  environment = "stage"
  providers = {
    aws = aws.stage
  }
}
