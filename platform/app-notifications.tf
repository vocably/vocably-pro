resource "aws_pinpoint_app" "mobile_app" {
  name = "vocably-${terraform.workspace}-mobile-app"
}
