variable "repo" {
  type = string
}

locals {
  label_colors = {
    grooming    = "662e9b"
    initiatives = "6ecbdb"
    timing      = "f86624"
  }

  issue_labels = {
    # for any changes to existing label names, make sure to migrate — see ../README.md

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
      color = local.label_colors.initiatives
      # GH Label description is limited to 100 characters
      description = "Relating to systems built in TTS and their need for tools, guidance, security authorization, etc."
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
    "t: days" = {
      color       = local.label_colors.timing
      description = "Should be complete-able in a matter of days or less (wall clock time)"
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
