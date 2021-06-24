output "active_repos" {
  description = "Used by rename_label.py"
  value       = [for repo, config in local.active_repos : repo]
}
