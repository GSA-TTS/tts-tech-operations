terraform {
  required_version = "~> 1.0"
  required_providers {
    github = {
      source  = "integrations/github"
      version = "~> 4.0"
    }
  }
  backend "s3" {
    bucket         = "tts-terraform-s3"
    key            = "tts-tech-portfolio/terraform.tfstate"
    dynamodb_table = "tts-terraform-dynamodb-tts-tech-portfolio"
    region         = "us-west-2"
    encrypt        = true
  }
}

provider "github" {
  owner = "18f"
}

locals {
  # options default to false
  repos = {
    "aws-admin" : {},
    "aws-admin-cleanup" : {},
    "before-you-ship" : { archived = true },
    "billing-tools" : { archived = true },
    "bug-bounty" : {},
    "certificate-service" : { archived = true },
    "chandika" : { archived = true },
    "charlie" : {},
    "chat" : {},
    "deploy-ttslicenses" : { archived = true },
    "dns" : { shared_content_ownership = true },
    "ghad" : {},
    "handbook" : { shared_content_ownership = true },
    "join.tts.gsa.gov" : { shared_content_ownership = true },
    "laptop" : { archived = true },
    "newrelic-terraform" : {},
    "pages-redirects" : {},
    "private-eye" : {},
    "raktabija" : { archived = true },
    "slack-export-handling" : { archived = true },
    "tts-common-controls" : {},
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

  for_each = local.active_repos
  repo     = each.key
  # don't include the issue template if there are others that work in the repository
  issue_templates = lookup(each.value, "shared_content_ownership", false) ? [] : ["general.md"]
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
