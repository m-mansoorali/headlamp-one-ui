# Headlamp One UI

A unified interface for accessing multiple Headlamp dashboards.

## Current Features

- Dynamic cluster rendering from JSON config
- Search bar for filtering clusters
- Environment filters (Prod, Staging, Dev)
- Status indicators (healthy, warning, critical)
- Cluster metadata (version, nodes, region)
- Action buttons for Headlamp, Metrics, Logs, K9s
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

More enhancements coming soon.