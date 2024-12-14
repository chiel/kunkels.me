data "digitalocean_kubernetes_cluster" "default" {
  name = "default"
}

resource "kubernetes_namespace" "kunkels_me" {
  metadata {
    name = "kunkels-me"

    labels = {
      "app.kubernetes.io/name" : "kunkels-me"
    }
  }
}

resource "kubernetes_secret" "ghcr_io" {
  type = "kubernetes.io/dockerconfigjson"

  metadata {
    name      = "ghcr.io"
    namespace = kubernetes_namespace.kunkels_me.metadata[0].name
  }

  data = {
    ".dockerconfigjson" = jsonencode({
      "auths" = {
        "https://ghcr.io" = {
          "auth" : base64encode(var.GHCR_CREDENTIALS)
        }
      }
    })
  }
}

resource "kubernetes_service_account" "deployer" {
  metadata {
    name      = "deployer"
    namespace = kubernetes_namespace.kunkels_me.metadata[0].name

    labels = {
      "app.kubernetes.io/name" : "deployer"
    }
  }

  automount_service_account_token = false
}

resource "kubernetes_secret" "deployer" {
  type = "kubernetes.io/service-account-token"

  metadata {
    name      = kubernetes_service_account.deployer.metadata[0].name
    namespace = kubernetes_namespace.kunkels_me.metadata[0].name

    annotations = {
      "kubernetes.io/service-account.name" = kubernetes_service_account.deployer.metadata[0].name
    }
  }
}

resource "kubernetes_role_binding" "deployer_deployer" {
  metadata {
    name      = "deployer-deployer"
    namespace = kubernetes_namespace.kunkels_me.metadata[0].name
  }
  role_ref {
    api_group = "rbac.authorization.k8s.io"
    kind      = "ClusterRole"
    name      = var.DEPLOYER_ROLE_NAME
  }
  subject {
    kind      = "ServiceAccount"
    name      = kubernetes_service_account.deployer.metadata[0].name
    namespace = kubernetes_namespace.kunkels_me.metadata[0].name
  }
}
