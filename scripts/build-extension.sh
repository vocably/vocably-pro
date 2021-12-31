#!/usr/bin/env bash

set -e

SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )
ROOT_DIR=$(dirname "$SCRIPT_DIR")
pushd "$ROOT_DIR"
VERSION=$(node -p -e "require('./package.json').version")
ENV_NAME=${1:-PROD}
env_name=$(echo "$ENV_NAME" | tr '[:upper:]' '[:lower:]')
export VERSION
echo "Building version ${VERSION}..."
yarn --cwd=./packages/extension build

ZIP_FILE_NAME="${env_name}_${VERSION}.zip"
ZIP_PATH="${ROOT_DIR}/${ZIP_FILE_NAME}"
pushd ./packages/extension/dist
zip -r "${ZIP_PATH}" .
echo "The extension archive has been saved to ${ZIP_PATH}"
popd

pushd ./platform
BUCKET_NAME=$(terraform output -raw artifacts_bucket)
BUCKET_URL=$(terraform output -raw artifacts_url)
popd
aws s3 cp "$ZIP_PATH" s3://"$BUCKET_NAME"
rm "$ZIP_PATH"
echo "${BUCKET_URL}/${ZIP_FILE_NAME}"
