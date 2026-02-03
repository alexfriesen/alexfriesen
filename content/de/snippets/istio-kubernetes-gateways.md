---
title: Istio Gateway API Setup in Kubernetes
description: Kompletter Guide für Istio Gateways mit Kubernetes Gateway API, Cert-Manager und TLS. Terraform Setup, HTTPRoutes und Let's Encrypt Integration.
date: '2026-02-02'
tags: ['kubernetes', 'istio']
---

# Istio Kubernetes Gateways

Mit der [Ankündigung, ingress-nginx in den Ruhestand zu schicken](https://kubernetes.io/blog/2025/11/11/ingress-nginx-retirement/) (RIP 🪦) und der Empfehlung vom Kubernetes Team die Gateway API zu verwenden, sind viele Nutzer gezwungen nach Alternativen zu suchen. Eine davon ist Istio mit seinen Kubernetes Gateways. Ein kompletter Gateway-Wechsel ist genau das, was dein Montagmorgen gebraucht hat! ☕️😅

In diesem Snippet gibt es:

- [Istio](https://istio.io/)
- [Cert-Manager](https://cert-manager.io/)
- [Kubernetes](https://kubernetes.io/)
- [Gateway API](https://kubernetes.io/docs/concepts/services-networking/gateway/)
- [Terraform](https://terraform.io/)
- [Helm](https://helm.sh/)
- YAML, YAML und noch mehr YAML!

## Installation

_Schnall dich an, wir installieren jetzt ein Service Mesh!_ 🚀

Hier ist eine Schritt-für-Schritt-Anleitung zur Installation von Istio und [Cert-Manager](https://cert-manager.io/) mit Terraform und Helm. Falls du das lieber manuell machen möchtest: Viel Glück, du tapfere Seele! 💪

```terraform
# Step 1: Die Basis legen
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

# Step 2: Istiod (das Gehirn der Operation 🧠)
resource "helm_release" "istiod" {
  name = "istiod-release"

  repository       = "https://istio-release.storage.googleapis.com/charts"
  chart            = "istiod"
  namespace        = "istio-system"
  create_namespace = true
  version          = "1.28.0"  # Aktualisiere diese Version regelmäßig, aber nicht an Freitagen! 📅

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

# Step 3: Cert-Manager (weil selbstsignierte Zertifikate so 2010 sind 🔐)
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

## Cert-Manager Konfiguration

**Wichtig:** Ohne diesen Schritt bleiben deine Zertifikate in einem ewigen "Pending"-Zustand, genau wie deine To-Do-Liste von letztem Jahr.

**Pro-Tipp:** Erstelle zuerst einen `letsencrypt-staging` Issuer zum Testen! Let's Encrypt hat Rate Limits, und die willst du nicht auslösen (Spoiler: Es ist frustrierend. Sehr frustrierend...).

```yaml
# issuer.yaml (Dein Ticket zu kostenlosen, vertrauenswürdigen Zertifikaten! 🎟️)
apiVersion: cert-manager.io/v1
kind: ClusterIssuer
metadata:
  name: letsencrypt-prod
spec:
  acme:
    server: https://acme-v02.api.letsencrypt.org/directory
    email: your-email@example.com # WICHTIG: Echte E-Mail eintragen! Let's Encrypt wird dich hier kontaktieren
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

_Jetzt wird's ernst: Zeit für YAML-Origami!_ 📜✂️

Hier konfigurieren wir ein Gateway mit HTTP (Port 80, für die Nostalgiker und automatische HTTPS-Redirects) und HTTPS (Port 443, für die Sicherheitsbewussten unter uns, also hoffentlich alle!).

- **HTTP Listener (Port 80):** Fängt unsichere Anfragen ab und sagt: "Nö, geh mal zu HTTPS rüber!"
- **HTTPS Listeners (Port 443):** Terminiert TLS und routet verschlüsselten Traffic zu deinen Services
- **Cert-Manager Integration:** Holt automatisch Let's Encrypt Zertifikate. Wie Magie, nur mit mehr YAML und weniger Zauberstäbe! 🪄✨

::tip
Die `hostname` Felder müssen mit deinen DNS-Einträgen übereinstimmen, sonst steht Cert-Manager ratlos da wie ein Tourist ohne Google Maps.
::

```yaml
apiVersion: v1
kind: Namespace
metadata:
  name: gateway # Ein eigener Namespace für Gateways. Ordnung ist das halbe Leben! 🗂️
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
# HTTP zu HTTPS Redirect (weil 2026 ist und wir keine unverschlüsselten Verbindungen mehr tolerieren! 🔒)
apiVersion: gateway.networking.k8s.io/v1
kind: HTTPRoute
metadata:
  name: example-http-route
  namespace: gateway
spec:
  parentRefs:
    - name: example-gateway
      sectionName: http # Referenziert den HTTP Listener von oben
  hostnames:
    - 'example.com'
    - '*.example.com' # Wildcard für alle Subdomains, praktisch!
    - 'www.example.com'
  rules:
    - filters:
        - type: RequestRedirect
          requestRedirect:
            scheme: https # "Bitte nutze HTTPS, danke!" höflich, aber bestimmt
            statusCode: 301 # Permanenter Redirect, Browser merken sich das
---
# Root Domain zu www Redirect (die klassische Weiterleitung, oder andersrum, je nach Geschmack) 🎭
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
    - 'example.com' # Nur die Root-Domain
  rules:
    - filters:
        - type: RequestRedirect
          requestRedirect:
            hostname: www.example.com # SEO-Tipp: Wähle EINE kanonische Domain und bleib dabei!
            statusCode: 301 # 301 = Permanent, 302 = Temporary (falls du's mal ändern willst)
```

## Route Konfiguration

_Fast geschafft! Jetzt verbinden wir noch die Punkte..._ 🔗

::note
HTTPRoutes können in verschiedenen Namespaces leben als das Gateway. Das ist das Schöne an der Gateway API. Cross-Namespace-Routing funktioniert out-of-the-box! (Eines der wenigen Dinge in Kubernetes, die einfach funktionieren 🎉)
::

```yaml
apiVersion: v1
kind: Namespace
metadata:
  name: production # Ja, wir nennen es gleich "production". YOLO! 🎲 (Falls ihr zuerst in staging testen wollt, ist das auch okay)
---
# Der eigentliche Service (das Ziel unserer ganzen Routing-Akrobatik! 🎯)
apiVersion: v1
kind: Service
metadata:
  name: my-service
  namespace: production
  labels:
    app: my-service # Labels sind wie Namensschilder auf Konferenzen, super wichtig!
spec:
  type: NodePort # NodePort für die Gateway-Anbindung (ClusterIP würde auch gehen)
  ports:
    - name: http-my-service # Namen sind wichtig, besonders wenn du mehrere Ports hast
      port: 80 # Der klassische HTTP-Port, ein Evergreen! 🌲
  selector:
    app: my-service # Dieser Selector verbindet den Service mit deinen Pods
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
