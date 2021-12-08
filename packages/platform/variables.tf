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

variable "lexicala_password" {
  type = string
}
