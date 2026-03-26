# Headlamp One UI — Helm Chart

A lightweight, configurable UI for accessing multiple Headlamp dashboards.  
This chart deploys the static UI into Kubernetes and optionally exposes it through Gateway API using an HTTPRoute.

This chart intentionally avoids creating cluster‑level resources such as Gateways or GatewayClasses.  
Platform teams own those.  
Application teams own the HTTPRoute.

---

## 🚀 Quickstart

```bash
helm install headlamp-one-ui ./charts/headlamp-one-ui \
  -n headlamp-one-ui --create-namespace
