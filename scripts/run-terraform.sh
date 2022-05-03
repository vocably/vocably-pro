#!/usr/bin/env bash

cd ./platform
terraform init -backend-config=./env-${env_name}.remote
terraform workspace select ${env_name}
terraform plan -var-file="env-${env_name}.tfvars"
terraform apply -var-file="env-${env_name}.tfvars" -auto-approve
