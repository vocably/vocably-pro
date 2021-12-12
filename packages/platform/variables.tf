variable "root_domain" {
  type = string
}

variable "dev_urls" {
  type    = list(string)
  default = []
}

variable "auth_domain" {
  type    = string
  default = "auth.vocably.pro"
}

variable "gcloud_project" {
  type    = string
  default = "vocably-332109"
}

variable "lexicala_username" {
  type = string
}

variable "lexicala_password" {
  type = string
}

variable "google_oauth2_client_id" {
  type    = string
  default = "356478205648-le03fnat0mcc5ro8u9d7bphr5gsvgveb.apps.googleusercontent.com"
}
