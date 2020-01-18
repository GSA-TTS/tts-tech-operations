variable "github_token" {}

provider "github" {
  organization = "someorg"
  token = "${var.github_token}"
}

resource "github_issue_label" "someorg_somerepo_another_label" {
  repository  = "somerepo"
  name        = "another label"
  description = ""
  color       = "EE7912"
}

resource "github_issue_label" "someorg_somerepo_bug" {
  repository  = "somerepo"
  name        = "bug"
  description = "Something isn't working"
  color       = "d73a4a"
}

resource "github_issue_label" "someorg_somerepo_common_issue" {
  repository  = "somerepo"
  name        = "common issue"
  description = "Label used across repositories"
  color       = "333333"
}
