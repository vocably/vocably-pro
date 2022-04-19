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

variable "extension_id" {
  type = string
}

variable "piwik_id" {
  type    = string
  default = "25473e53-4fde-4fe1-a2ce-273ec6a4d0e3"
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
  type    = bool
  default = true
}

variable "paddle_vendor_id" {
  type    = number
  default = 5064
}

variable "paddle_subscription_products" {
  type = list(object({
    duration = number,
    id       = number,
    price    = number,
    currency = string,
    trial    = number,
  }))
  default = [
    {
      duration = 1,
      id       = 26950,
      price    = 9.95,
      currency = "EUR",
      trial    = 7,
    },
    {
      duration = 3,
      id       = 27076,
      price    = 19.95,
      currency = "EUR",
      trial    = 7,
    },
    {
      duration = 12,
      id       = 26952,
      price    = 59.40,
      currency = "EUR",
      trial    = 7,
    },
    {
      duration = 1,
      id       = 26951,
      price    = 9.95,
      currency = "EUR",
      trial    = 0,
    },
    {
      duration = 3,
      id       = 27077,
      price    = 19.95,
      currency = "EUR",
      trial    = 0,
    },
    {
      duration = 12,
      id       = 26953,
      price    = 59.40,
      currency = "EUR",
      trial    = 0,
    }
  ]
}

variable "paddle_public_key" {
  type    = string
  default = <<PUBLIC_KEY
-----BEGIN PUBLIC KEY-----
MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAysQlrMGkV+sSpRpMDi0T
V0salCD2SRwDjjq3gwNflu6jR/yJMOjRPqujNyZ/blsvntYrynsyJEAV28RaROZt
8z7jaYCG5/1Vw4pqs79nbI+QB2PHJb8LLshH+IjNj5wrt25Zj47sKR+JxP0YG+W7
OIcLOlkzwmqgJH7bMJDHGO2U3nEza5sHWSvtiSuc73G5ZzJ8jsBLLnwbP5KlddH4
sXb8hYpTXnRQNGLd0jLvVMs/f0Ytj3uBM4Z1wIb9HstEgbC/tgd+1bupokW0ovNs
EXoADrMQQK1ZQEZjZCpYNPfJKR/bZiumDSVzbr7RdPEfjkXueJMOlK9HTHOlHY+j
Kl3YZSfng8HjWJySaTHhEGfC3voJJ1xIJEKbB0FdihLGes9DBrTTtWif9jkhNJut
nvjWkwWlLO6LUtHvUrXH2tajOaY6vl4Zr9XcmPBw8rRp+lm7tMwLky8r4bqe1a/i
g8yWgNZJqprZpy8phiPsHrdiPYWuNb65XxOuL7c9Vis9JJINJPIRx+1XMMBLPTVh
P7Ni25J7enekPD4fjj9quMFlSwAyByvWwQ3ARkzzl+qm7aW6qwNl7VUGprvAPerc
ss0prnN5T3x4uQeTPjdeQhtI5SMLkOxi0SDtz9M81q74dEcPvAJmHBO67OisKLms
7IHnRcfOfFCzbPIgrakVnSECAwEAAQ==
-----END PUBLIC KEY-----
PUBLIC_KEY
}

variable "paddle_test_env" {
  type    = string
  default = "dev"
}
