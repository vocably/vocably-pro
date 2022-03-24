resource "aws_dynamodb_table" "cancelled_subscriptions" {
  name         = "vocably-${terraform.workspace}-cancelled-subscriptions"
  billing_mode = "PAY_PER_REQUEST"
  hash_key     = "Username"

  attribute {
    name = "Username"
    type = "S"
  }

  attribute {
    name = "CancellationTimestamp"
    type = "N"
  }

  global_secondary_index {
    name            = "CancellationTimestampIndex"
    projection_type = "ALL"
    hash_key        = "CancellationTimestamp"
  }
}

