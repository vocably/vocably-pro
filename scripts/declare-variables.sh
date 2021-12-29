#!/usr/bin/env bash

declare -a variables=(
  "AWS_ACCESS_KEY_ID"
  "AWS_SECRET_ACCESS_KEY"
  "GCP_KEY"
  "TF_VAR_lexicala_username"
  "TF_VAR_lexicala_password"
  "TF_VAR_google_oauth2_client_secret"
)

for variable in "${variables[@]}"
do
   envVar="${ENV_NAME}_${variable}"
   echo "export ${variable}=${!envVar}" >> $BASH_ENV
done
