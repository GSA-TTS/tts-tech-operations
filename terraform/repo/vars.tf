variable "repo" {
  type = string
}

variable "issue_labels" {
  default = {
    "a: blog-able"                  = "F72585"
    "a: demo-able"                  = "F72585"
    "dg: decide"                    = "662E9B"
    "dg: delegate"                  = "662E9B"
    "e: aws cleanup"                = "6ecbdb"
    "e: bb expansion"               = "6ecbdb"
    "e: SaaS documentation"         = "6ecbdb"
    "g: accepted"                   = "662E9B"
    "g: final"                      = "662E9B"
    "g: initial"                    = "662E9B"
    "i: acquisition"                = "6ecbdb"
    "i: bug bounty"                 = "6ecbdb"
    "i: DEI"                        = "6ecbdb"
    "i: Digital Council"            = "6ecbdb"
    "i: enterprise architecture"    = "6ecbdb"
    "i: infrastructure improvement" = "6ecbdb"
    "i: internal workflow"          = "6ecbdb"
    "i: mac"                        = "6ecbdb"
    "i: misc"                       = "6ecbdb"
    "i: SaaS authorizations"        = "6ecbdb"
    "m: due date"                   = "EA3546"
    "m: feedback needed"            = "F72585"
    "t: days"                       = "F86624"
    "t: expedite"                   = "F86624"
    "t: hours"                      = "F86624"
    "t: months"                     = "F86624"
    "t: weeks"                      = "F86624"
  }
}

variable "issue_templates" {
  type        = list(string)
  description = "List of filenames from this repository, without the path"
}
