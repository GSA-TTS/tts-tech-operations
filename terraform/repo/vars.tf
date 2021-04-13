variable "repo" {
  type = string
}

locals {
  label_colors = {
    epics       = "6ecbdb"
    grooming    = "662e9b"
    initiatives = "6ecbdb"
    timing      = "f86624"
  }

  issue_labels = {
    # for any changes to existing label names, make sure to migrate — see ../README.md

    # epics
    "e: aws cleanup"        = local.label_colors["epics"]
    "e: SaaS documentation" = local.label_colors["epics"]

    # grooming states
    "g: accepted" = local.label_colors["grooming"]
    "g: final"    = local.label_colors["grooming"]
    "g: initial"  = local.label_colors["grooming"]

    # initiatives
    "i: custom software"  = local.label_colors["initiatives"]
    "i: infrastructure"   = local.label_colors["initiatives"]
    "i: internal team"    = local.label_colors["initiatives"]
    "i: misc"             = local.label_colors["initiatives"]
    "i: SaaS"             = local.label_colors["initiatives"]
    "i: customer support" = local.label_colors["initiatives"]
    # deprecated
    "i: DEI"                     = local.label_colors["initiatives"]
    "i: Digital Council"         = local.label_colors["initiatives"]
    "i: enterprise architecture" = local.label_colors["initiatives"]
    "i: max.gov"                 = local.label_colors["initiatives"]
    "i: software assurance"      = local.label_colors["initiatives"]

    # timing
    "m: due date" = "ea3546"
    "t: days"     = local.label_colors["timing"]
    "t: expedite" = local.label_colors["timing"]
    "t: hours"    = local.label_colors["timing"]
    "t: months"   = local.label_colors["timing"]
    "t: weeks"    = local.label_colors["timing"]
  }
}

variable "issue_templates" {
  type        = list(string)
  description = "List of filenames from this repository, without the path"
}
