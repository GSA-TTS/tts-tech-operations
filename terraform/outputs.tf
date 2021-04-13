output "active_repos" {
  value = [for repo, config in local.active_repos : repo]
}
