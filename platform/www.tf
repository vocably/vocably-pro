resource "null_resource" "deploy" {
  provisioner "local-exec" {
    command = "aws s3 sync ${local.www_root} s3://${var.www_bucket}"
  }

  triggers = {
    www_bucket = var.www_bucket
    dir_sha1   = sha1(join("", [for f in fileset(local.www_root, "**") : filesha1("${local.www_root}/${f}")]))
  }
}
