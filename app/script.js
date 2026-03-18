async function loadClusters() {
    try {
      const response = await fetch("dashboard-config.json");
      const data = await response.json();
  
      const container = document.getElementById("cluster-container");
      container.innerHTML = ""; // clear placeholder
  
      data.clusters.forEach(cluster => {
        const card = document.createElement("div");
        card.className = "cluster-card";
  
        card.innerHTML = `
          <h2>${cluster.name}</h2>
          <p>Environment: ${cluster.environment}</p>
          <button onclick="window.open('${cluster.url}', '_blank')">Open</button>
        `;
  
        container.appendChild(card);
      });
    } catch (err) {
      console.error("Failed to load clusters:", err);
    }
  }
  
  loadClusters();