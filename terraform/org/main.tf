provider "github" {
  owner = "18F"
  alias = "source"
}

provider "github" {
  owner = var.org
  alias = "dest"
}

data "github_team" "tech_portfolio" {
  provider = github.source
  slug     = "tts-tech-portfolio"
}

locals {
  owners = concat(data.github_team.tech_portfolio.members, ["tts-bot"])
}

resource "github_membership" "owner" {
  for_each = toset(local.owners)

  provider = github.dest
  username = each.key
  role     = "admin"
}
