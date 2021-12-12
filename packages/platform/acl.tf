resource "aws_cognito_identity_pool" "main" {
  identity_pool_name               = "vocably-${terraform.workspace}-identity-pool"
  allow_unauthenticated_identities = false
  allow_classic_flow               = false

  cognito_identity_providers {
    client_id               = aws_cognito_user_pool_client.client.id
    provider_name           = "cognito-idp.us-east-1.amazonaws.com/${tolist(data.aws_cognito_user_pools.users.ids)[0]}"
    server_side_token_check = false
  }

  supported_login_providers = {
    "accounts.google.com" = var.google_oauth2_client_id
  }
}

resource "aws_iam_role" "authenticated" {
  name = "vocably-${terraform.workspace}-cognito-authenticated"

  assume_role_policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "Federated": "cognito-identity.amazonaws.com"
      },
      "Action": "sts:AssumeRoleWithWebIdentity",
      "Condition": {
        "StringEquals": {
          "cognito-identity.amazonaws.com:aud": "${aws_cognito_identity_pool.main.id}"
        },
        "ForAnyValue:StringLike": {
          "cognito-identity.amazonaws.com:amr": "authenticated"
        }
      }
    }
  ]
}
EOF
}

resource "aws_iam_role_policy" "authenticated" {
  name = "vocably-${terraform.workspace}-cognito-authenticated-policy"
  role = aws_iam_role.authenticated.id

  policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "ListUserObjects",
      "Effect": "Allow",
      "Action": "s3:ListBucket",
      "Resource": ["arn:aws:s3:::${local.cards_bucket_name}"],
      "Condition": {
        "StringLike": {
          "s3:prefix": ["${"$"}{cognito-identity.amazonaws.com:sub}"]
        }
      }
    },
    {
      "Sid": "ReadWriteDeleteYourObjects",
      "Effect": "Allow",
      "Action": [
        "s3:GetObject",
        "s3:PutObject",
        "s3:DeleteObject"
      ],
      "Resource": [
        "arn:aws:s3:::${local.cards_bucket_name}/${"$"}{cognito-identity.amazonaws.com:sub}",
        "arn:aws:s3:::${local.cards_bucket_name}/${"$"}{cognito-identity.amazonaws.com:sub}/*"
      ]
    }
  ]
}
EOF
}

resource "aws_iam_role" "unauthenticated" {
  name               = "vocably-${terraform.workspace}-cognito-unauthenticated"
  assume_role_policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Action": "sts:AssumeRole",
      "Principal": {
         "Federated": "cognito-identity.amazonaws.com"
      },
      "Effect": "Allow",
      "Sid": ""
    }
  ]
}
EOF
}

resource "aws_iam_role_policy" "unauthenticated" {
  name   = "vocably-${terraform.workspace}-cognito-unauthenticated-policy"
  role   = aws_iam_role.unauthenticated.id
  policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "",
      "Action": "*",
      "Effect": "Deny",
      "Resource": "*"
    }
  ]
}
EOF
}

resource "aws_cognito_identity_pool_roles_attachment" "main" {
  identity_pool_id = aws_cognito_identity_pool.main.id

  roles = {
    authenticated   = aws_iam_role.authenticated.arn
    unauthenticated = aws_iam_role.unauthenticated.arn
  }
}

output "auth_identity_pool_id" {
  value = aws_cognito_identity_pool.main.id
}
