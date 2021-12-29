#!/usr/bin/env bash

sudo apt-get install -y unzip
wget https://releases.hashicorp.com/terraform/1.1.2/terraform_1.1.2_linux_amd64.zip
unzip terraform_1.1.2_linux_amd64.zip
sudo mv terraform /usr/local/bin/
