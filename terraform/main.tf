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

module "tts-tech-portfolio" {
  source = "./repo"

  repo = "tts-tech-portfolio"
}

module "tts-tech-portfolio-private" {
  source = "./repo"

  repo = "tts-tech-portfolio-private"
}

module "ghad" {
  source = "./repo"

  repo = "ghad"
}

module "laptop" {
  source = "./repo"

  repo            = "laptop"
  issue_templates = []
}

module "aws-admin" {
  source = "./repo"

  repo = "aws-admin"
}

module "bug-bounty" {
  source = "./repo"

  repo = "bug-bounty"
}

module "before-you-ship" {
  source = "./repo"

  repo = "before-you-ship"
}

module "dns" {
  source = "./repo"

  repo            = "dns"
  issue_templates = []
}

module "handbook" {
  source = "./repo"

  repo            = "handbook"
  issue_templates = []
}
