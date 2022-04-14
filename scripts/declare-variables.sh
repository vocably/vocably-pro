#!/usr/bin/env bash

declare -a variables=(
  "AWS_ACCESS_KEY_ID"
  "AWS_SECRET_ACCESS_KEY"
  "GOOGLE_CREDENTIALS"
  "TF_VAR_lexicala_host"
  "TF_VAR_lexicala_key"
  "TF_VAR_google_oauth2_client_secret"
  "TF_VAR_test_user_password"
)

for variable in "${variables[@]}"
do
   envVar="${ENV_NAME}_${variable}"
   echo "export ${variable}='${!envVar}'" >> $BASH_ENV
done

env_name=$(echo "$ENV_NAME" | tr '[:upper:]' '[:lower:]')
echo "export env_name=${env_name}" >> $BASH_ENV
