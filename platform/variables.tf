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

variable "lexicala_host" {
  type = string
}

variable "lexicala_key" {
  type = string
}

variable "extension_name" {
  type = string
}

variable "extension_key" {
  type = string
}

variable "extension_content_script_excluded_matches" {
  type = string
}

variable "extension_externally_connectable_matches" {
  type = string
}

variable "extension_extra_permissions" {
  type = string
}

variable "extension_host_permissions" {
  type = string
}

variable "extension_auto_reload" {
  type = string
}

variable "extension_id" {
  type = string
}

variable "sentry_environment" {
  type = string
}

variable "piwik_id" {
  type = string
}

variable "test_user_username" {
  type    = string
  default = "test_dev"
}

variable "test_user_email" {
  type    = string
  default = "test_dev@vocably.pro"
}

variable "test_user_password" {
  type = string
}

variable "paddle_sandbox" {
  type = bool
}

variable "paddle_vendor_id" {
  type = number
}

variable "paddle_test_env" {
  type = string
}

variable "paddle_subscription_trial_products" {
  type = list(object({
    duration = number,
    id       = number,
    price    = number,
    currency = string,
    trial    = number,
  }))
}

variable "paddle_subscription_non_trial_products" {
  type = list(object({
    duration = number,
    id       = number,
    price    = number,
    currency = string,
    trial    = number,
  }))
}

variable "paddle_public_key" {
  type = string
}

variable "alarm_email" {
  type = string
}
