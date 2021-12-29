#!/usr/bin/env bash

declare -a packages=(
  "model"
  "hermes"
  "pontis"
  "webpack"
  "crud"
  "api"
  "extension-service-worker"
  "extension-messages"
  "extension-content-ui"
  "extension-content-script"
)

for package in "${packages[@]}"
do
   yarn --cwd packages/${package} build
done
