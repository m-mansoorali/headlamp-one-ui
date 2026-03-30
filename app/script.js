let clusters = [];
let activeEnv = "all";

async function loadClusters() {
  const res = await fetch("dashboard-config.json");
  const data = await res.json();
  clusters = data.clusters;
  render();
}

function render() {
  const container = document.getElementById("cluster-container");
  const q = document.getElementById("searchInput").value.toLowerCase();

  container.innerHTML = "";

  clusters
    .filter(c => activeEnv === "all" || c.environment === activeEnv)
    .filter(c =>
      c.name.toLowerCase().includes(q) ||
      c.environment.toLowerCase().includes(q) ||
      (c.region || "").toLowerCase().includes(q)
    )
    .forEach(c => {
      const card = document.createElement("div");
      card.className = "cluster-card";

      card.innerHTML = `
        <h2>${c.name}</h2>
        <div class="meta">
          <div>Environment: ${c.environment}</div>
          <div>Version: ${c.version}</div>
        </div>
        <div class="actions">
          <button onclick="window.open('${c.headlampUrl}', '_blank')">Headlamp</button>
        </div>
      `;

      container.appendChild(card);
    });
}

document.getElementById("searchInput").addEventListener("input", render);

document.querySelectorAll(".filters button").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filters button").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    activeEnv = btn.dataset.env;
    render();
  });
});

loadClusters();