variable "repo" {
  type = string
}

variable "issue_templates" {
  type    = list(string)
  default = ["general.md"]
}
