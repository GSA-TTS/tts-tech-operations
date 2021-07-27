# all TTS-managed orgs in
# https://handbook.tts.gsa.gov/github/#organizations
#
# Unable to use a loop, because "A module containing its own provider configurations is not compatible with the for_each … arguments"
# https://www.terraform.io/docs/language/modules/develop/providers.html

module "org_18f" {
  source = "./org"
  org    = "18F"
}

module "cloud_gov" {
  source = "./org"
  org    = "cloud_gov"
}

module "digital_analytics_program" {
  source = "./org"
  org    = "digital_analytics_program"
}

module "digitalgov" {
  source = "./org"
  org    = "digitalgov"
}

module "federalist_users" {
  source = "./org"
  org    = "federalist_users"
}

module "fedramp" {
  source = "./org"
  org    = "fedramp"
}

module "fellows_in_innovation" {
  source = "./org"
  org    = "fellows_in_innovation"
}

module "project_open_data" {
  source = "./org"
  org    = "project_open_data"
}

module "presidential_innovation_fellows" {
  source = "./org"
  org    = "presidential_innovation_fellows"
}

module "usagov" {
  source = "./org"
  org    = "usagov"
}

module "uswds" {
  source = "./org"
  org    = "uswds"
}
