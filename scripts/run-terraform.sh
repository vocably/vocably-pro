#!/usr/bin/env bash

echo $GCP_KEY >> google.json
export GOOGLE_APPLICATION_CREDENTIALS="$(pwd)/google.json"

echo $GOOGLE_APPLICATION_CREDENTIALS
cat google.json
echo $GCP_KEY
echo $STAGE_GCP_KEY
echo $STAGE_GOOGLE_CREDENTIALS

cd ./platform
terraform init -backend-config=./${ENV_NAME}.remote
terraform workspace select stage
terraform plan -var-file="${ENV_NAME}.tfvars"
