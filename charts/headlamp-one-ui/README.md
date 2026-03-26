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
      environment: prod
      status: healthy
    - name: staging-us
      url: https://headlamp-staging.example.com
      environment: staging
      status: warning
```

```bash
helm install headlamp-one-ui ./charts/headlamp-one-ui -n headlamp-one-ui --create-namespace
```
if testing locally without httpRoute that you can access it on 127.0.01 by using port-forward
```bash
 kubectl port-forward svc/headlamp-one-ui -n headlamp-one-ui 8080:80
```