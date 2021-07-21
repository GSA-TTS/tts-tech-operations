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

resource "github_membership" "owner" {
  for_each = toset(data.github_team.tech_portfolio.members)

  provider = github.dest
  username = each.key
  role     = "admin"
}

resource "github_membership" "tts_bot" {
  provider = github.dest
  username = "tts-bot"
  role     = "admin"
}
