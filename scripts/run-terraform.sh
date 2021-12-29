#!/usr/bin/env bash

cd ./platform
terraform init -backend-config=./${ENV_NAME}.remote
terraform workspace select stage
terraform plan -var-file="${ENV_NAME}.tfvars"
