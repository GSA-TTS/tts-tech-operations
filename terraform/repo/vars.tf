variable "repo" {
  type = string
}

variable "issue_labels" {
  default = {
    # for any changes to existing label names, make sure to migrate — see ../README.md

    # epics
    "e: aws cleanup"        = "6ecbdb"
    "e: SaaS documentation" = "6ecbdb"

    # grooming states
    "g: accepted" = "662e9b"
    "g: final"    = "662e9b"
    "g: initial"  = "662e9b"

    # initiatives
    "i: custom software"  = "6ecbdb"
    "i: infrastructure"   = "6ecbdb"
    "i: internal team"    = "6ecbdb"
    "i: misc"             = "6ecbdb"
    "i: SaaS"             = "6ecbdb"
    "i: customer support" = "6ecbdb"
    # deprecated
    "i: DEI"                     = "6ecbdb"
    "i: Digital Council"         = "6ecbdb"
    "i: enterprise architecture" = "6ecbdb"
    "i: max.gov"                 = "6ecbdb"
    "i: software assurance"      = "6ecbdb"

    # timing
    "m: due date" = "ea3546"
    "t: days"     = "f86624"
    "t: expedite" = "f86624"
    "t: hours"    = "f86624"
    "t: months"   = "f86624"
    "t: weeks"    = "f86624"
  }
}

variable "issue_templates" {
  type        = list(string)
  description = "List of filenames from this repository, without the path"
}
