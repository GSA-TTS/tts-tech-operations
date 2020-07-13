terraform {
  required_version = "~> 0.12.6"
  required_providers {
    github = "~> 2.4"
  }
}

provider "github" {
  token        = var.github_token
  organization = "18f"
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

module "tts-tech-portfolio-private" {
  source = "./repo"

  repo = "tts-tech-portfolio-private"
}

resource "github_issue_label" "ghad" {
  repository = "ghad"
  for_each   = var.issue_labels
  name       = each.key
  color      = each.value
}

module "ghad" {
  source = "./repo"

  repo = "ghad"
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

module "aws-admin" {
  source = "./repo"

  repo = "aws-admin"
}

resource "github_issue_label" "bug-bounty" {
  repository = "bug-bounty"
  for_each   = var.issue_labels
  name       = each.key
  color      = each.value
}

module "bug-bounty" {
  source = "./repo"

  repo = "bug-bounty"
}

resource "github_issue_label" "before-you-ship" {
  repository = "before-you-ship"
  for_each   = var.issue_labels
  name       = each.key
  color      = each.value
}

module "before-you-ship" {
  source = "./repo"

  repo = "before-you-ship"
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

module "vulnerability-disclosure-policy" {
  source = "./repo"

  repo = "vulnerability-disclosure-policy"
}

resource "github_issue_label" "handbook" {
  repository = "handbook"
  for_each   = var.issue_labels
  name       = each.key
  color      = each.value
}
