resource "google_service_account" "translation_user" {
  account_id   = "${terraform.workspace}-translate-api-user"
  display_name = "Translate ${terraform.workspace} API User"
}

resource "google_project_iam_binding" "translation" {
  project = var.gcloud_project_id
  role    = "roles/cloudtranslate.user"

  members = [
    "serviceAccount:${google_service_account.translation_user.email}",
  ]
}

resource "google_service_account_key" "credentials" {
  service_account_id = google_service_account.translation_user.name
  public_key_type    = "TYPE_X509_PEM_FILE"
}

resource "google_project_service" "text_to_speech_api" {
  project = var.gcloud_project_id
  service = "texttospeech.googleapis.com"
}
