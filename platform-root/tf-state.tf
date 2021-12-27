module "prod_state" {
  source      = "./tf-state"
  environment = "prod"
}

#module "stage_state" {
#  source      = "./tf-state"
#  environment = "stage"
#  providers = {
#    aws = aws.stage
#  }
#}
