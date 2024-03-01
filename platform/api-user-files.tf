resource "aws_api_gateway_resource" "user_files" {
  rest_api_id = aws_api_gateway_rest_api.rest_api.id
  parent_id   = aws_api_gateway_rest_api.rest_api.root_resource_id
  path_part   = "files"
}

module "user_files_cors" {
  source  = "squidfunk/api-gateway-enable-cors/aws"
  version = "0.3.3"

  api_id          = aws_api_gateway_rest_api.rest_api.id
  api_resource_id = aws_api_gateway_resource.user_files.id
}

resource "aws_api_gateway_resource" "user_file" {
  rest_api_id = aws_api_gateway_rest_api.rest_api.id
  parent_id   = aws_api_gateway_resource.user_files.id
  path_part   = "{userFile}"
}

module "user_file_cors" {
  source  = "squidfunk/api-gateway-enable-cors/aws"
  version = "0.3.3"

  api_id          = aws_api_gateway_rest_api.rest_api.id
  api_resource_id = aws_api_gateway_resource.user_file.id
}

// Put user_file:

resource "aws_api_gateway_method" "put_user_file" {
  rest_api_id   = aws_api_gateway_rest_api.rest_api.id
  resource_id   = aws_api_gateway_resource.user_file.id
  http_method   = "PUT"
  authorization = "COGNITO_USER_POOLS"
  authorizer_id = aws_api_gateway_authorizer.rest_api_cognito.id

  request_parameters = {
    "method.request.path.userFile" = true
  }
}

resource "aws_api_gateway_method_response" "put_user_file_200" {
  rest_api_id = aws_api_gateway_rest_api.rest_api.id
  resource_id = aws_api_gateway_method.put_user_file.resource_id
  http_method = aws_api_gateway_method.put_user_file.http_method
  status_code = "200"

  response_parameters = {
    "method.response.header.Access-Control-Allow-Origin" = true
    "method.response.header.Timestamp"                   = true
    "method.response.header.Content-Length"              = true
    "method.response.header.Content-Type"                = true
  }

  response_models = {
    "text/plain" = "Empty"
  }
}

resource "aws_api_gateway_integration" "put_user_file" {
  rest_api_id             = aws_api_gateway_rest_api.rest_api.id
  resource_id             = aws_api_gateway_method.put_user_file.resource_id
  http_method             = aws_api_gateway_method.put_user_file.http_method
  type                    = "AWS"
  integration_http_method = "PUT"
  uri                     = "arn:aws:apigateway:${data.aws_region.current.name}:s3:path/${aws_s3_bucket.cards.bucket}/{userId}/files/{userFile}"
  credentials             = aws_iam_role.cards_api_bucket.arn

  request_parameters = {
    "integration.request.path.userId"   = "context.authorizer.claims.sub",
    "integration.request.path.userFile" = "method.request.path.userFile"
  }
}

resource "aws_api_gateway_integration_response" "put_user_file_200" {
  depends_on = [aws_api_gateway_integration.put_user_file]

  rest_api_id = aws_api_gateway_rest_api.rest_api.id
  resource_id = aws_api_gateway_method.put_user_file.resource_id
  http_method = aws_api_gateway_method.put_user_file.http_method
  status_code = aws_api_gateway_method_response.put_user_file_200.status_code

  response_parameters = {
    "method.response.header.Access-Control-Allow-Origin" = "'*'"
    "method.response.header.Timestamp"                   = "integration.response.header.Date"
    "method.response.header.Content-Length"              = "integration.response.header.Content-Length"
    "method.response.header.Content-Type"                = "integration.response.header.Content-Type"
  }
}

// Get user_file:

resource "aws_api_gateway_method" "get_user_file" {
  rest_api_id   = aws_api_gateway_rest_api.rest_api.id
  resource_id   = aws_api_gateway_resource.user_file.id
  http_method   = "GET"
  authorization = "COGNITO_USER_POOLS"
  authorizer_id = aws_api_gateway_authorizer.rest_api_cognito.id

  request_parameters = {
    "method.request.path.userFile" = true
  }
}

resource "aws_api_gateway_method_response" "get_user_file_200" {
  rest_api_id = aws_api_gateway_rest_api.rest_api.id
  resource_id = aws_api_gateway_method.get_user_file.resource_id
  http_method = aws_api_gateway_method.get_user_file.http_method
  status_code = "200"

  response_parameters = {
    "method.response.header.Access-Control-Allow-Origin" = true
    "method.response.header.Timestamp"                   = true
    "method.response.header.Content-Length"              = true
    "method.response.header.Content-Type"                = true
  }

  response_models = {
    "application/json" = "Empty"
  }
}

resource "aws_api_gateway_method_response" "get_user_file_204" {
  rest_api_id = aws_api_gateway_rest_api.rest_api.id
  resource_id = aws_api_gateway_method.get_user_file.resource_id
  http_method = aws_api_gateway_method.get_user_file.http_method
  status_code = "204"

  response_parameters = {
    "method.response.header.Access-Control-Allow-Origin" = true
    "method.response.header.Timestamp"                   = true
    "method.response.header.Content-Length"              = true
    "method.response.header.Content-Type"                = true
  }

  response_models = {
    "text/plain" = "Empty"
  }
}

resource "aws_api_gateway_integration" "get_user_file" {
  rest_api_id             = aws_api_gateway_rest_api.rest_api.id
  resource_id             = aws_api_gateway_method.get_user_file.resource_id
  http_method             = aws_api_gateway_method.get_user_file.http_method
  type                    = "AWS"
  integration_http_method = "GET"
  uri                     = "arn:aws:apigateway:${data.aws_region.current.name}:s3:path/${aws_s3_bucket.cards.bucket}/{userId}/files/{userFile}"
  credentials             = aws_iam_role.cards_api_bucket.arn

  request_parameters = {
    "integration.request.path.userId"   = "context.authorizer.claims.sub",
    "integration.request.path.userFile" = "method.request.path.userFile"
  }
}

resource "aws_api_gateway_integration_response" "get_user_file_200" {
  depends_on = [aws_api_gateway_integration.get_user_file]

  rest_api_id = aws_api_gateway_rest_api.rest_api.id
  resource_id = aws_api_gateway_method.get_user_file.resource_id
  http_method = aws_api_gateway_method.get_user_file.http_method
  status_code = aws_api_gateway_method_response.get_user_file_200.status_code

  response_parameters = {
    "method.response.header.Access-Control-Allow-Origin" = "'*'"
    "method.response.header.Timestamp"                   = "integration.response.header.Date"
    "method.response.header.Content-Length"              = "integration.response.header.Content-Length"
    "method.response.header.Content-Type"                = "integration.response.header.Content-Type"
  }
}

resource "aws_api_gateway_integration_response" "get_user_file_4xx" {
  depends_on = [aws_api_gateway_integration.get_user_file]

  rest_api_id = aws_api_gateway_rest_api.rest_api.id
  resource_id = aws_api_gateway_method.get_user_file.resource_id
  http_method = aws_api_gateway_method.get_user_file.http_method
  status_code = aws_api_gateway_method_response.get_user_file_204.status_code

  selection_pattern = "4\\d{2}"

  response_parameters = {
    "method.response.header.Access-Control-Allow-Origin" = "'*'"
  }
}

// Delete user_file:

resource "aws_api_gateway_method" "delete_user_file" {
  rest_api_id   = aws_api_gateway_rest_api.rest_api.id
  resource_id   = aws_api_gateway_resource.user_file.id
  http_method   = "DELETE"
  authorization = "COGNITO_USER_POOLS"
  authorizer_id = aws_api_gateway_authorizer.rest_api_cognito.id

  request_parameters = {
    "method.request.path.userFile" = true
  }
}

resource "aws_api_gateway_method_response" "delete_user_file_200" {
  rest_api_id = aws_api_gateway_rest_api.rest_api.id
  resource_id = aws_api_gateway_method.delete_user_file.resource_id
  http_method = aws_api_gateway_method.delete_user_file.http_method
  status_code = "200"

  response_parameters = {
    "method.response.header.Access-Control-Allow-Origin" = true
    "method.response.header.Timestamp"                   = true
    "method.response.header.Content-Length"              = true
    "method.response.header.Content-Type"                = true
  }

  response_models = {
    "application/json" = "Empty"
  }
}

resource "aws_api_gateway_integration" "delete_user_file" {
  rest_api_id             = aws_api_gateway_rest_api.rest_api.id
  resource_id             = aws_api_gateway_method.delete_user_file.resource_id
  http_method             = aws_api_gateway_method.delete_user_file.http_method
  type                    = "AWS"
  integration_http_method = "DELETE"
  uri                     = "arn:aws:apigateway:${data.aws_region.current.name}:s3:path/${aws_s3_bucket.cards.bucket}/{userId}/files/{userFile}"
  credentials             = aws_iam_role.cards_api_bucket.arn

  request_parameters = {
    "integration.request.path.userId"   = "context.authorizer.claims.sub",
    "integration.request.path.userFile" = "method.request.path.userFile"
  }
}

resource "aws_api_gateway_integration_response" "delete_user_file_200" {
  depends_on = [aws_api_gateway_integration.delete_user_file]

  rest_api_id = aws_api_gateway_rest_api.rest_api.id
  resource_id = aws_api_gateway_method.delete_user_file.resource_id
  http_method = aws_api_gateway_method.delete_user_file.http_method
  status_code = aws_api_gateway_method_response.delete_user_file_200.status_code

  response_parameters = {
    "method.response.header.Access-Control-Allow-Origin" = "'*'"
    "method.response.header.Timestamp"                   = "integration.response.header.Date"
    "method.response.header.Content-Length"              = "integration.response.header.Content-Length"
    "method.response.header.Content-Type"                = "integration.response.header.Content-Type"
  }
}

