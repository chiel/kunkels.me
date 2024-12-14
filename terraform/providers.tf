locals {
  kube_config = data.digitalocean_kubernetes_cluster.default.kube_config.0
  kube_host   = data.digitalocean_kubernetes_cluster.default.endpoint
}

provider "digitalocean" {
  # spaces_access_id  = var.DIGITALOCEAN_SPACES_ACCESS_ID
  # spaces_secret_key = var.DIGITALOCEAN_SPACES_SECRET_KEY
  token = var.DIGITALOCEAN_TOKEN
}

provider "github" {
  token = var.GITHUB_TOKEN
}

# provider "helm" {
#   kubernetes {
#     host                   = local.kube_host
#     token                  = local.kube_config.token
#     client_certificate     = local.kube_config.client_certificate
#     client_key             = local.kube_config.client_key
#     cluster_ca_certificate = base64decode(local.kube_config.cluster_ca_certificate)
#   }
# }

provider "kubernetes" {
  host                   = local.kube_host
  token                  = local.kube_config.token
  client_certificate     = local.kube_config.client_certificate
  client_key             = local.kube_config.client_key
  cluster_ca_certificate = base64decode(local.kube_config.cluster_ca_certificate)
}
