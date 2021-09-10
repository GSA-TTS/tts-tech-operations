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
  org    = "cloud-gov"
}

module "digital_analytics_program" {
  source = "./org"
  org    = "digital-analytics-program"
}

module "digitalgov" {
  source = "./org"
  org    = "digitalgov"
}

module "federalist_users" {
  source = "./org"
  org    = "federalist-users"
}

module "fedramp" {
  source = "./org"
  org    = "fedramp"
}

module "fellows_in_innovation" {
  source = "./org"
  org    = "fellows-in-innovation"
}

module "project_open_data" {
  source = "./org"
  org    = "project-open-data"
}

module "presidential_innovation_fellows" {
  source = "./org"
  org    = "presidential-innovation-fellows"
}

module "usagov" {
  source = "./org"
  org    = "usagov"
}

module "uswds" {
  source = "./org"
  org    = "uswds"
}
