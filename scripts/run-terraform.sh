#!/usr/bin/env bash

echo $STAGE_GCP_KEY >> google.json
export GOOGLE_APPLICATION_CREDENTIALS="$(pwd)/google.json"

cd ./platform
terraform init -backend-config=./${ENV_NAME}.remote
terraform workspace select stage
terraform plan -var-file="${ENV_NAME}.tfvars"
