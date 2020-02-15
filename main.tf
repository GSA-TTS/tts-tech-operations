provider "github" {
  token        = "${var.github_token}"
  organization = "its-a-lisa"
}

data "github_repository" "tts-tech-portfolio" {
  full_name = "its-a-lisa/tts-tech-portfolio"
}

resource "github_issue_label" "tts-tech-portfolio" {
  repository = "tts-tech-portfolio"
  count      = "${length(var.issue_labels)}"
  name       = "${element(keys(var.issue_labels), count.index)}"
  color      = "${element(values(var.issue_labels), count.index)}"
}
