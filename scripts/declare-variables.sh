#!/usr/bin/env bash

declare -a variables=("LEXICALA_USERNAME" "LEXICALA_PASSWORD")

for variable in "${variables[@]}"
do
   envVar="${ENV_NAME}_${variable}"
   echo "export ${variable}=${!envVar}" >> $BASH_ENV
done
