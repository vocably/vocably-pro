#!/usr/bin/env bash

sudo apt-get install -y unzip
aws.globalwget https://releases.hashicorp.com/terraform/1.1.2/terraform_1.1.2_linux_amd64.zip
aws.globalunzip terraform_1.1.2_linux_amd64.zip
aws.globalsudo mv terraform /usr/local/bin/
