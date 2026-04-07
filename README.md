# Headlamp One UI — Helm Chart

A lightweight, configurable UI for accessing multiple Headlamp dashboards.  
This chart deploys the static UI into Kubernetes and optionally exposes it through Gateway API using an HTTPRoute.

This chart intentionally avoids creating cluster‑level resources such as Gateways or GatewayClasses.  
Platform teams own those.  
Application teams own the HTTPRoute.

---

## 🚀 Quickstart
Update cluster information in values.yaml 
For example:
```bash
config:
  clusters:
    - name: prod-eu
      url: https://headlamp-prod.example.com
      environment: Prod
      status: healthy
    - name: staging-us
      url: https://headlamp-staging.example.com
      environment: Staging
      status: warning
    - name: dev-us
      url: https://headlamp-dev.example.com
      environment: Dev
      status: warning
```

```bash
helm install headlamp-one-ui oci://ghcr.io/m-mansoorali/charts/headlamp-one-ui --version 0.1.0 -f <headlamp-one-ui-values.yaml> --namespace headlamp-one-ui --create-namespace
```
if testing locally without httpRoute that you can access it on 127.0.01 by using port-forward
```bash
 kubectl port-forward svc/headlamp-one-ui -n headlamp-one-ui 8080:80
```

## Kubernetes Deployment

The UI can now be deployed inside a Kubernetes cluster.

### Deploy

```bash
kubectl create namespace headlamp-one-ui
kubectl apply -f k8s/
```

### Test via port-forward

```bash
kubectl port-forward svc/headlamp-one-ui -n headlamp-one-ui 8080:80
```

### Then open

```bash
http://localhost:8080
```

### 🌐 Optional: Expose via Gateway API (HTTPRoute)

Headlamp One UI does not create a Gateway. It only attaches to an existing platform Gateway.

#### Requirements

A Gateway must already exist, for example:
•  platform-gateway in namespace platform

#### Apply HTTPRoute

```bash
kubectl apply -f k8s/httproute.yaml
```

#### Access the UI

```bash
http://headlamp-one-ui.<example>.com
```

#### 🔐 Optional: HTTPS Support (TLS)

If your platform Gateway supports HTTPS termination, you can provide a TLS secret.

1. Create TLS Secret

```bash
kubectl apply -f k8s/tls-secret.yaml
```

1. Ensure your HTTPRoute hostname matches the certificate
2. Update DNS to point to the Gateway LB

More enhancements coming soon.

#### 🔐 OIDC Authentication (Optional)



Headlamp One UI supports OIDC authentication through Envoy Gateway’s SecurityPolicy.



##### Requirements



- An existing Gateway that supports SecurityPolicy

- A registered OIDC application (Azure AD, Okta, Auth0, etc.)



##### Apply OIDC Secret



```bash

kubectl apply -f k8s/oidc-secret.yaml
```