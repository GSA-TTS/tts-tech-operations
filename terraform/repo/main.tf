terraform {
  # https://github.com/integrations/terraform-provider-github/issues/652#issuecomment-786255125
  required_providers {
    github = {
      source = "integrations/github"
    }
  }
}

resource "github_issue_label" "labels" {
  for_each = local.issue_labels

  repository  = var.repo
  name        = each.key
  description = each.value.description
  color       = each.value.color
}

locals {
  org            = "18F"
  canonical_repo = "tts-tech-portfolio"
}

data "github_repository" "repo" {
  name = var.repo
}

resource "github_repository_file" "issue_templates" {
  # don't overwrite canonical source
  for_each = var.repo == local.canonical_repo ? toset([]) : toset(var.issue_templates)

  repository     = var.repo
  branch         = data.github_repository.repo.default_branch
  file           = ".github/ISSUE_TEMPLATE/${each.key}"
  content        = file("${path.module}/../../.github/ISSUE_TEMPLATE/${each.key}")
  commit_message = "updated from canonical source\n\nhttps://github.com/${local.org}/${local.canonical_repo}/blob/master/.github/ISSUE_TEMPLATE/${each.key}"

  lifecycle {
    ignore_changes = [commit_message]
  }
}

data "github_team" "tech_portfolio" {
  slug = "tts-tech-portfolio"
}

resource "github_team_repository" "admin" {
  team_id    = data.github_team.tech_portfolio.id
  repository = var.repo
  permission = "admin"
}
