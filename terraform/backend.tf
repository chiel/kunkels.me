terraform {
  backend "s3" {
    endpoints = {
      s3 = "https://ams3.digitaloceanspaces.com"
    }

    bucket = "kunkels"
    key    = "tfstate/kunkels.me.tfstate"

    skip_credentials_validation = true
    skip_metadata_api_check     = true
    skip_region_validation      = true
    skip_requesting_account_id  = true
    skip_s3_checksum            = true
    region                      = "eu-west-1"
  }
}
