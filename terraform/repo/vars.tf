variable "repo" {
  type = string
}

variable "issue_labels" {
  default = {
    # epics
    "e: aws cleanup"        = "6ecbdb"
    "e: SaaS documentation" = "6ecbdb"

    # grooming states
    "g: accepted" = "662E9B"
    "g: final"    = "662E9B"
    "g: initial"  = "662E9B"

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
    "m: due date" = "EA3546"
    "t: days"     = "F86624"
    "t: expedite" = "F86624"
    "t: hours"    = "F86624"
    "t: months"   = "F86624"
    "t: weeks"    = "F86624"
  }
}

variable "issue_templates" {
  type        = list(string)
  description = "List of filenames from this repository, without the path"
}
