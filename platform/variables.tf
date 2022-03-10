variable "root_domain" {
  type = string
}

variable "gcloud_project_id" {
  type = string
}

variable "google_oauth2_client_id" {
  type = string
}

variable "google_oauth2_client_secret" {
  type = string
}

variable "lexicala_username" {
  type = string
}

variable "lexicala_password" {
  type = string
}

variable "extension_name" {
  type = string
}

variable "extension_key" {
  type = string
}

variable "extension_id" {
  type = string
}

variable "paddle_sandbox" {
  type    = bool
  default = true
}

variable "paddle_vendor_id" {
  type    = number
  default = 5064
}

variable "paddle_product_id" {
  type    = number
  default = 25141
}
