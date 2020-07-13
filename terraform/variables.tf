variable "github_token" {

}

variable "issue_labels" {
  default = {
    "dg: delegate"                  = "662E9B"
    "dg: decide"                    = "662E9B"
    "g: accepted"                   = "662E9B"
    "g: final"                      = "662E9B"
    "g: initial"                    = "662E9B"
    "t: expedite"                   = "F86624"
    "t: days"                       = "F86624"
    "t: hours"                      = "F86624"
    "t: months"                     = "F86624"
    "t: weeks"                      = "F86624"
    "m: due date"                   = "EA3546"
    "m: feedback needed"            = "F72585"
    "a: blog-able"                  = "F72585"
    "a: demo-able"                  = "F72585"
    "i: SaaS authorizations"        = "6ecbdb"
    "i: infrastructure improvement" = "6ecbdb"
    "i: acquisition"                = "6ecbdb"
    "i: communication"              = "6ecbdb"
    "i: internal workflow"          = "6ecbdb"
    "i: mac"                        = "6ecbdb"
    "i: enterprise architecture"    = "6ecbdb"
    "i: bug bounty"                 = "6ecbdb"
    "i: misc"                       = "6ecbdb"
    "e: aws cleanup"                = "6ecbdb"
    "e: bb expansion"               = "6ecbdb"
    "e: SaaS documentation"         = "6ecbdb"
  }
}
