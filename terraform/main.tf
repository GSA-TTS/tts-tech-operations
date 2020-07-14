terraform {
  required_version = "~> 0.13.0"
  required_providers {
    github = {
      source  = "hashicorp/github"
      version = "~> 2.4"
    }
  }
}

provider "github" {
  token        = var.github_token
  organization = "18f"
}

locals {
  # value is whether issue templates should be included or not
  repos = {
    "aws-admin" : true,
    "before-you-ship" : true,
    "bug-bounty" : true,
    "dns" : false,
    "ghad" : true,
    "handbook" : false,
    "laptop" : false,
    "tts-tech-portfolio-private" : true,
    "tts-tech-portfolio" : true,
  }
}

module "repo" {
  source = "./repo"

  for_each        = local.repos
  repo            = each.key
  issue_templates = each.value ? ["general.md"] : []
}
