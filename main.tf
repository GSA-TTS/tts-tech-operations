provider "github" {
  token        = "${var.github_token}"
  organization = "18f"
}

data "github_repository" "tts-tech-portfolio" {
  full_name = "18f/tts-tech-portfolio"
}

resource "github_issue_label" "tts-tech-portfolio" {
  repository = "tts-tech-portfolio"
  count      = "${length(var.issue_labels)}"
  name       = "${element(keys(var.issue_labels), count.index)}"
  color      = "${element(values(var.issue_labels), count.index)}"
}

resource "github_issue_label" "tts-tech-portfolio-private" {
  repository = "tts-tech-portfolio-private"
  count      = "${length(var.issue_labels)}"
  name       = "${element(keys(var.issue_labels), count.index)}"
  color      = "${element(values(var.issue_labels), count.index)}"
}

resource "github_issue_label" "ghad" {
  repository = "ghad"
  count      = "${length(var.issue_labels)}"
  name       = "${element(keys(var.issue_labels), count.index)}"
  color      = "${element(values(var.issue_labels), count.index)}"
}

resource "github_issue_label" "laptop" {
  repository = "laptop"
  count      = "${length(var.issue_labels)}"
  name       = "${element(keys(var.issue_labels), count.index)}"
  color      = "${element(values(var.issue_labels), count.index)}"
}

resource "github_issue_label" "aws-admin" {
  repository = "aws-admin"
  count      = "${length(var.issue_labels)}"
  name       = "${element(keys(var.issue_labels), count.index)}"
  color      = "${element(values(var.issue_labels), count.index)}"
}

resource "github_issue_label" "bug-bounty" {
  repository = "bug-bounty"
  count      = "${length(var.issue_labels)}"
  name       = "${element(keys(var.issue_labels), count.index)}"
  color      = "${element(values(var.issue_labels), count.index)}"
}

resource "github_issue_label" "before-you-ship" {
  repository = "before-you-ship"
  count      = "${length(var.issue_labels)}"
  name       = "${element(keys(var.issue_labels), count.index)}"
  color      = "${element(values(var.issue_labels), count.index)}"
}

resource "github_issue_label" "dns" {
  repository = "dns"
  count      = "${length(var.issue_labels)}"
  name       = "${element(keys(var.issue_labels), count.index)}"
  color      = "${element(values(var.issue_labels), count.index)}"
}

resource "github_issue_label" "vulnerability-disclosure-policy" {
  repository = "vulnerability-disclosure-policy"
  count      = "${length(var.issue_labels)}"
  name       = "${element(keys(var.issue_labels), count.index)}"
  color      = "${element(values(var.issue_labels), count.index)}"
}

resource "github_issue_label" "handbook" {
  repository = "handbook"
  count      = "${length(var.issue_labels)}"
  name       = "${element(keys(var.issue_labels), count.index)}"
  color      = "${element(values(var.issue_labels), count.index)}"
}
