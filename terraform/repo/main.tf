resource "github_repository_file" "issue_templates" {
  for_each = toset(var.issue_templates)

  repository = var.repo
  file       = ".github/ISSUE_TEMPLATE/${each.key}"
  content    = file("${path.module}/../../.github/ISSUE_TEMPLATE/${each.key}")
}
