variable "bucket_name" {
  type = string
}

variable "domain" {
  type = string
}

variable "certificate" {
  type = object({
    arn = string
  })
}

variable "route_53_zone" {
  type = object({
    zone_id = string
    name    = string
  })
}
