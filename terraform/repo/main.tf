resource "github_issue_label" "labels" {
  for_each = var.issue_labels

  repository = var.repo
  name       = each.key
  color      = each.value
}

locals {
  canonical_repo = "tts-tech-portfolio"
}

resource "github_repository_file" "issue_templates" {
  # don't overwrite canonical source
  for_each = var.repo == local.canonical_repo ? toset([]) : toset(var.issue_templates)

  repository     = var.repo
  file           = ".github/ISSUE_TEMPLATE/${each.key}"
  content        = file("${path.module}/../../.github/ISSUE_TEMPLATE/${each.key}")
  commit_message = "updated from canonical source\n\nhttps://github.com/18F/${local.canonical_repo}/blob/master/.github/ISSUE_TEMPLATE/${each.key}"

  lifecycle {
    ignore_changes = [commit_message]
  }
}
