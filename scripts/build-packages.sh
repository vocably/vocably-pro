#!/usr/bin/env bash

set -e

declare -a packages=(
  "model"
  "hermes"
  "pontis"
  "webpack"
  "crud"
  "api"
  "extension-messages"
  "extension-service-worker"
  "extension-content-ui"
  "extension-content-script"
)

for package in "${packages[@]}"
do
   echo "Building ${package}..."
   yarn --cwd packages/${package} build
done
