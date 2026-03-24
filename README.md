# Headlamp One UI

A unified interface for accessing multiple Headlamp dashboards.

## Current Features

- Dynamic cluster rendering from JSON config
- Search bar for filtering clusters
- Environment filters (Prod, Staging, Dev)
- Action button for Headlamp
- Modern card-based UI

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