data "kubernetes_service" "ingress" {
  metadata {
    name      = "ingress-nginx-controller"
    namespace = "ingress"
  }
}

resource "digitalocean_record" "kunkels_me" {
  for_each = {
    "@"   = data.kubernetes_service.ingress.status[0].load_balancer[0].ingress[0].ip
    "www" = data.kubernetes_service.ingress.status[0].load_balancer[0].ingress[0].ip
  }

  domain = "kunkels.me"
  type   = "A"
  name   = each.key
  ttl    = 1800
  value  = each.value
}
