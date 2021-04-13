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
    "e: aws cleanup" = {
      color       = local.label_colors["epics"]
      description = ""
    }
    "e: SaaS documentation" = {
      color       = local.label_colors["epics"]
      description = ""
    }

    # grooming states
    "g: initial" = {
      color       = local.label_colors.grooming
      description = "Issue template needs to be filled out, and/or initiative/timing labels need to be added."
    }
    "g: final" = {
      color       = local.label_colors.grooming
      description = "Issue ready for review."
    }
    "g: accepted" = {
      color       = local.label_colors.grooming
      description = "Issue has been fully groomed."
    }

    # initiatives
    "i: custom software" = {
      color       = local.label_colors.initiatives
      description = "Relating to systems we've built in TTS"
    }
    "i: customer support" = {
      color       = local.label_colors.initiatives
      description = "Relating to supporting TTS staff and partners: troubleshooting, documentation, etc."
    }
    "i: infrastructure" = {
      color       = local.label_colors.initiatives
      description = "Relating to technology underneath/supporting custom software across TTS"
    }
    "i: internal team" = {
      color       = local.label_colors.initiatives
      description = "Relating to process or training within the Tech Portfolio, or communication about the team outwards"
    }
    "i: misc" = {
      color       = local.label_colors.initiatives
      description = "Issues that don't fit in another Initiative"
    }
    "i: SaaS" = {
      color       = local.label_colors.initiatives
      description = "Relating to third-party software: acquisition, security compliance, etc."
    }
    # deprecated
    "i: DEI" = {
      color       = local.label_colors.initiatives
      description = ""
    }
    "i: Digital Council" = {
      color       = local.label_colors.initiatives
      description = ""
    }
    "i: enterprise architecture" = {
      color       = local.label_colors.initiatives
      description = ""
    }
    "i: max.gov" = {
      color       = local.label_colors.initiatives
      description = ""
    }
    "i: software assurance" = {
      color       = local.label_colors.initiatives
      description = ""
    }

    # timing
    "m: due date" = {
      color       = "ea3546"
      description = "Has a hard or soft deadline"
    }
    "t: expedite" = {
      color       = local.label_colors.timing
      description = "Needed to be pulled into a sprint after Planning was complete"
    }
    # estimates
    "t: hours" = {
      color       = local.label_colors.timing
      description = "Should be complete-able in a matter of hours (wall clock time)"
    }
    "t: days" = {
      color       = local.label_colors.timing
      description = "Should be complete-able in a matter of days (wall clock time)"
    }
    "t: weeks" = {
      color       = local.label_colors.timing
      description = "Should be complete-able in a matter of weeks (wall clock time) — see what can be split out"
    }
    "t: months" = {
      color       = local.label_colors.timing
      description = "Should be complete-able in a matter of months (wall clock time) — should be split up"
    }
  }
}

variable "issue_templates" {
  type        = list(string)
  description = "List of filenames from this repository, without the path"
}
