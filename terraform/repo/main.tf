resource "github_repository_file" "issue_templates" {
  for_each = toset(var.issue_templates)

  repository     = var.repo
  file           = ".github/ISSUE_TEMPLATE/${each.key}"
  content        = file("${path.module}/../../.github/ISSUE_TEMPLATE/${each.key}")
  commit_message = "updated from canonical source\n\nhttps://github.com/18F/tts-tech-portfolio/blob/master/.github/ISSUE_TEMPLATE/${each.key}"

  lifecycle {
    ignore_changes = [commit_message]
  }
}
