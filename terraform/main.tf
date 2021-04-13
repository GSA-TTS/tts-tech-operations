terraform {
  required_version = "~> 0.14.0"
  required_providers {
    github = {
      source = "integrations/github"
    }
  }
  backend "s3" {
    bucket         = "tts-terraform-s3"
    key            = "tts-tech-portfolio/terraform.tfstate"
    dynamodb_table = "tts-terraform-dynamodb-tts-tech-portfolio"
    region         = "us-west-2"
  }
}

provider "github" {
  token = var.github_token
  owner = "18f"
}

locals {
  # options default to false
  repos = {
    "aws-admin" : {},
    "before-you-ship" : {},
    "billing-tools" : { archived = true },
    "bug-bounty" : {},
    "certificate-service" : { archived = true },
    "chandika" : { archived = true },
    "charlie" : {},
    "chat" : {},
    "deploy-ttslicenses" : { archived = true },
    "dns" : { skip_issue_templates = true },
    "ghad" : {},
    "handbook" : { skip_issue_templates = true },
    "join.tts.gsa.gov" : { skip_issue_templates = true },
    "laptop" : { archived = true },
    "newrelic-terraform" : {},
    "private-eye" : {},
    "raktabija" : { archived = true },
    "slack-export-handling" : { archived = true },
    "tts-tech-portfolio-private" : {},
    "tts-tech-portfolio" : {},
    "uswds-jekyll" : {},
    "vulnerability-disclosure-policy" : {},
  }

  # skip archived repositories
  active_repos = { for repo, config in local.repos : repo => config if !lookup(config, "archived", false) }
}

module "repo" {
  source = "./repo"

  for_each        = local.active_repos
  repo            = each.key
  issue_templates = lookup(each.value, "skip_issue_templates", false) ? [] : ["general.md"]
}

resource "local_file" "github_repos" {
  content = join("\n\n", [
    "<!-- this file is generated by Terraform -->",
    templatefile("${path.module}/github.md.tmpl", { repos = local.repos })
  ])
  filename             = "${path.module}/../how_we_work/github.md"
  file_permission      = "0644"
  directory_permission = "0755"
}
