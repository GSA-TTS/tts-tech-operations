terraform {
  required_version = "~> 0.12.6"
}

provider "github" {
  token        = var.github_token
  organization = "18f"
}

data "github_repository" "tts-tech-portfolio" {
  full_name = "18f/tts-tech-portfolio"
}

resource "github_issue_label" "tts-tech-portfolio" {
  repository = "tts-tech-portfolio"
  for_each   = var.issue_labels
  name       = each.key
  color      = each.value
}

resource "github_issue_label" "tts-tech-portfolio-private" {
  repository = "tts-tech-portfolio-private"
  for_each   = var.issue_labels
  name       = each.key
  color      = each.value
}

resource "github_issue_label" "ghad" {
  repository = "ghad"
  for_each   = var.issue_labels
  name       = each.key
  color      = each.value
}

resource "github_issue_label" "laptop" {
  repository = "laptop"
  for_each   = var.issue_labels
  name       = each.key
  color      = each.value
}

resource "github_issue_label" "aws-admin" {
  repository = "aws-admin"
  for_each   = var.issue_labels
  name       = each.key
  color      = each.value
}

resource "github_issue_label" "bug-bounty" {
  repository = "bug-bounty"
  for_each   = var.issue_labels
  name       = each.key
  color      = each.value
}

resource "github_issue_label" "before-you-ship" {
  repository = "before-you-ship"
  for_each   = var.issue_labels
  name       = each.key
  color      = each.value
}

resource "github_issue_label" "dns" {
  repository = "dns"
  for_each   = var.issue_labels
  name       = each.key
  color      = each.value
}

resource "github_issue_label" "vulnerability-disclosure-policy" {
  repository = "vulnerability-disclosure-policy"
  for_each   = var.issue_labels
  name       = each.key
  color      = each.value
}

resource "github_issue_label" "handbook" {
  repository = "handbook"
  for_each   = var.issue_labels
  name       = each.key
  color      = each.value
}
