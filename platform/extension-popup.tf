data "external" "extension_popup_build" {
  depends_on = [local_file.extension_popup_environment]
  program = ["bash", "-c", <<EOT
(npm run build) >&2 && echo "{\"dest\": \"$(pwd)/dist\"}"
EOT
  ]
  working_dir = local.extension_popup_root
}
