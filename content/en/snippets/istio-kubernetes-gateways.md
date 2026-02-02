---
title: Istio Kubernetes Gateways
description: Configure Istio Gateways in Kubernetes with the Gateway API.
date: '2026-02-02'
tags: ['kubernetes', 'istio']
---

# Istio Kubernetes Gateways

With the [announcement to retire ingress-nginx](https://kubernetes.io/blog/2025/11/11/ingress-nginx-retirement/) (RIP 🪦) and the Kubernetes team's recommendation to use the Gateway API, many users are forced to look for alternatives. One of them is Istio with its Kubernetes Gateways – because a complete gateway migration is exactly what your Monday morning needed! ☕️😅

In this snippet you'll find:

- [Istio](https://istio.io/)
- [Cert-Manager](https://cert-manager.io/)
- [Kubernetes](https://kubernetes.io/)
- [Gateway API](https://kubernetes.io/docs/concepts/services-networking/gateway/)
- [Terraform](https://terraform.io/)
- [Helm](https://helm.sh/)
- YAML, YAML and more YAML!

## Installation

_Buckle up, we're installing a service mesh now!_ 🚀

Here's a step-by-step guide to installing Istio and [Cert-Manager](https://cert-manager.io/) with Terraform and Helm. If you prefer to do this manually: Good luck, you brave soul! 💪

```terraform
# Step 1: Laying the foundation
resource "helm_release" "istio_base" {
  name = "istio-base-release"

  repository       = "https://istio-release.storage.googleapis.com/charts"
  chart            = "base"
  namespace        = "istio-system"
  create_namespace = true
  version          = "1.28.0"

  set = [
    {
      name  = "global.istioNamespace"
      value = "istio-system"
    }
  ]
}

# Step 2: Istiod - the brain of the operation 🧠
resource "helm_release" "istiod" {
  name = "istiod-release"

  repository       = "https://istio-release.storage.googleapis.com/charts"
  chart            = "istiod"
  namespace        = "istio-system"
  create_namespace = true
  version          = "1.28.0"  # Update this version regularly - but not on Fridays! 📅

  set = [
    {
      name  = "telemetry.enabled"
      value = "true"
    },
    {
      name  = "global.istioNamespace"
      value = "istio-system"
    },
    {
      name  = "meshConfig.ingressService"
      value = "istio-gateway"
    },
    {
      name  = "meshConfig.ingressSelector"
      value = "gateway"
    }
  ]

  depends_on = [helm_release.istio_base]
}

# Step 3: Cert-Manager - because self-signed certificates are so 2010 🔐
resource "helm_release" "cert_manager" {
  name = "cert-manager"

  repository       = "https://charts.jetstack.io"
  chart            = "cert-manager"
  namespace        = "cert-manager"
  create_namespace = true
  version          = "v1.19.0"

  set = [
    {
      name  = "crds.enabled"
      value = "true"
      }, {
      name  = "config.enableGatewayAPI"
      value = "true"
    }
  ]

  depends_on = [
    helm_release.istio_base,
    helm_release.istiod
  ]

}
```

## Cert-Manager Configuration

**Important:** Without this step, your certificates will remain in an eternal "Pending" state - like your to-do list from last year.

**Pro tip:** Create a `letsencrypt-staging` issuer first for testing! Let's Encrypt has rate limits, and you don't want to trigger those (spoiler: it's frustrating. Very frustrating...).

```yaml
# issuer.yaml - Your ticket to free, trusted certificates! 🎟️
apiVersion: cert-manager.io/v1
kind: ClusterIssuer
metadata:
  name: letsencrypt-prod
spec:
  acme:
    server: https://acme-v02.api.letsencrypt.org/directory
    email: your-email@example.com # IMPORTANT: Enter a real email! Let's Encrypt will contact you here
    privateKeySecretRef:
      name: letsencrypt-prod
    solvers:
      - selector: {}
        http01:
          gatewayHTTPRoute:
            parentRefs:
              - kind: Gateway
                name: example-gateway
                namespace: gateway
```

## Gateway Setup

_Now it's getting serious: Time for YAML origami!_ 📜✂️

Here we configure a Gateway with HTTP (port 80, for the nostalgic and automatic HTTPS redirects) and HTTPS (port 443, for the security-conscious among us - hopefully everyone!).

- **HTTP Listener (Port 80):** Catches insecure requests and says: "Nope, head over to HTTPS!"
- **HTTPS Listeners (Port 443):** Terminates TLS and routes encrypted traffic to your services
- **Cert-Manager Integration:** Automatically fetches Let's Encrypt certificates - like magic, only with more YAML and fewer wands! 🪄✨

::tip
The `hostname` fields must match your DNS entries, otherwise Cert-Manager will stand there as confused as a tourist without Google Maps.
::

```yaml
apiVersion: v1
kind: Namespace
metadata:
  name: gateway # A separate namespace for gateways - organization is half the battle! 🗂️
---
apiVersion: gateway.networking.k8s.io/v1
kind: Gateway
metadata:
  name: example-gateway
  namespace: gateway
  annotations:
    cert-manager.io/cluster-issuer: letsencrypt-prod
spec:
  gatewayClassName: istio
  listeners:
    - name: http
      port: 80
      protocol: HTTP
      allowedRoutes:
        namespaces:
          from: All
    - name: example-com-https
      port: 443
      protocol: HTTPS
      hostname: 'example.com'
      allowedRoutes:
        namespaces:
          from: All
      tls:
        mode: Terminate
        certificateRefs:
          - name: example-com-tls
    - name: www-example-com-https
      port: 443
      protocol: HTTPS
      hostname: 'www.example.com'
      allowedRoutes:
        namespaces:
          from: All
      tls:
        mode: Terminate
        certificateRefs:
          - name: www-example-com-tls
---
# HTTP to HTTPS redirect - because it's 2026 and we don't tolerate unencrypted connections anymore! 🔒
apiVersion: gateway.networking.k8s.io/v1
kind: HTTPRoute
metadata:
  name: example-http-route
  namespace: gateway
spec:
  parentRefs:
    - name: example-gateway
      sectionName: http # References the HTTP listener from above
  hostnames:
    - 'example.com'
    - '*.example.com' # Wildcard for all subdomains - handy!
    - 'www.example.com'
  rules:
    - filters:
        - type: RequestRedirect
          requestRedirect:
            scheme: https # "Please use HTTPS, thanks!" - polite but firm
            statusCode: 301 # Permanent redirect - browsers remember this
---
# Root domain to www redirect - the classic redirect (or vice versa, depending on taste) 🎭
apiVersion: gateway.networking.k8s.io/v1
kind: HTTPRoute
metadata:
  name: example-root-route
  namespace: gateway
spec:
  parentRefs:
    - name: example-gateway
      sectionName: example-com-https
  hostnames:
    - 'example.com' # Only the root domain
  rules:
    - filters:
        - type: RequestRedirect
          requestRedirect:
            hostname: www.example.com # SEO tip: Choose ONE canonical domain and stick with it!
            statusCode: 301 # 301 = Permanent, 302 = Temporary (if you want to change it later)
```

## Route Configuration

_Almost there! Now let's connect the dots..._ 🔗

::note
HTTPRoutes can live in different namespaces than the Gateway - that's the beauty of the Gateway API. Cross-namespace routing works out-of-the-box! (One of the few things in Kubernetes that just work 🎉)
::

```yaml
apiVersion: v1
kind: Namespace
metadata:
  name: production # Yes, we're calling it "production" right away - YOLO! 🎲 (Testing in staging first is fine too though)
---
# The actual service - the target of all our routing acrobatics! 🎯
apiVersion: v1
kind: Service
metadata:
  name: my-service
  namespace: production
  labels:
    app: my-service # Labels are like name tags at conferences - super important!
spec:
  type: NodePort # NodePort for gateway connectivity (ClusterIP would work too)
  ports:
    - name: http-my-service # Names are important - especially when you have multiple ports
      port: 80 # The classic HTTP port - an evergreen! 🌲
  selector:
    app: my-service # This selector connects the service to your pods
---
apiVersion: gateway.networking.k8s.io/v1
kind: HTTPRoute
metadata:
  name: www-example-com-route
  namespace: production
spec:
  parentRefs:
    - name: example-gateway
      namespace: gateway
      sectionName: www-example-com-https
  hostnames:
    - www.example.com
  rules:
    - matches:
        - path:
            type: PathPrefix
            value: /
      backendRefs:
        - name: my-service
          port: 80
```

**Happy Gateway-ing!** 🚀
