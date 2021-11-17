variable "root_domain" {
  type = string
}

variable "dev_urls" {
  type    = list(string)
  default = []
}
