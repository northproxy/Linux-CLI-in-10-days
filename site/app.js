/**
 * Script: app.js
 *
 * Purpose:
 * Renders the experimental Cards + Layered Knowledge Map interface.
 *
 * Project:
 * Linux CLI in 10 Days — learning and portfolio project.
 *
 * Learning focus:
 * Vanilla JavaScript, JSON loading, DOM rendering, local graph layout,
 * contextual navigation, responsive interaction, and accessible previews.
 *
 * Lifecycle:
 * Experimental prototype. Keep separate from the validated temporary-focus version
 * until the Cards + Graph direction is evaluated.
 */

const state = {
  data: null,
  mode: "overview",
  currentArea: null,
  currentNode: null,
  history: []
};

const overviewView = document.getElementById("overview-view");
const graphView = document.getElementById("graph-view");
const areaGrid = document.getElementById("area-grid");
const graphStage = document.getElementById("graph-stage");
const graphNodes = document.getElementById("graph-nodes");
const childLayerWrap = document.getElementById("child-layer-wrap");
const childLayer = document.getElementById("child-layer");
const deepLayerWrap = document.getElementById("deep-layer-wrap");
const deepLayer = document.getElementById("deep-layer");
const contextTitle = document.getElementById("context-title");
const detailPanel = document.getElementById("detail-panel");
const detailType = document.getElementById("detail-type");
const detailTitle = document.getElementById("detail-title");
const detailSyntax = document.getElementById("detail-syntax");
const detailDescription = document.getElementById("detail-description");
const detailSafety = document.getElementById("detail-safety");
const breadcrumb = document.getElementById("breadcrumb");
const transitionLayer = document.getElementById("transition-layer");
const brandHome = document.getElementById("brand-home");

async function loadData() {
  const response = await fetch("../data/map.json");
  if (!response.ok) {
    throw new Error(`Could not load data/map.json: HTTP ${response.status}`);
  }
  state.data = await response.json();
  renderOverview();
}

function renderOverview() {
  state.mode = "overview";
  state.currentArea = null;
  state.currentNode = null;
  state.history = [];

  graphView.hidden = true;
  graphView.classList.remove(
    "graph-preparing",
    "graph-revealing",
    "nodes-wait",
    "nodes-show",
    "detail-wait",
    "detail-show"
  );
  overviewView.hidden = false;

  transitionLayer.classList.remove("is-active", "is-moving", "is-dissolving");
  transitionLayer.innerHTML = "";
  transitionLayer.removeAttribute("style");

  areaGrid.classList.remove("is-transitioning");
  detailPanel.hidden = true;
  childLayer.classList.remove("has-deep-focus");
  deepLayerWrap.hidden = true;
  areaGrid.innerHTML = "";

  state.data.areas.forEach((area) => {
    const card = document.createElement("button");
    card.className = "area-card";
    card.type = "button";

    const commandLabels = area.commands
      .slice(0, 8)
      .map((id) => state.data.nodes[id]?.label ?? id);

    card.innerHTML = `
      <div>
        <p class="kicker">Functional area</p>
        <h3>${escapeHtml(area.label)}</h3>
        <p>${escapeHtml(area.description)}</p>
      </div>
      <div class="command-preview">
        ${commandLabels.map((label) => `<span class="command-chip">${escapeHtml(label)}</span>`).join("")}
      </div>
    `;

    card.addEventListener("click", () => transitionIntoArea(area.id, card));
    areaGrid.appendChild(card);
  });

  renderBreadcrumb();
}


function transitionIntoArea(areaId, card) {
  const area = getArea(areaId);
  if (!area || !card) return;

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReducedMotion) {
    enterArea(areaId);
    return;
  }

  const startRect = card.getBoundingClientRect();
  const computed = getComputedStyle(card);

  transitionLayer.innerHTML = `
    <div class="transition-content">
      <div>
        <p class="kicker">Functional area</p>
        <h3>${escapeHtml(area.label)}</h3>
      </div>
      <p>${escapeHtml(area.description)}</p>
    </div>
  `;

  Object.assign(transitionLayer.style, {
    left: `${startRect.left}px`,
    top: `${startRect.top}px`,
    width: `${startRect.width}px`,
    height: `${startRect.height}px`,
    background: computed.backgroundColor,
    borderRadius: computed.borderRadius
  });

  transitionLayer.classList.add("is-active");
  areaGrid.classList.add("is-transitioning");
  card.classList.add("is-selected");

  window.setTimeout(() => {
    state.mode = "graph";
    state.currentArea = areaId;
    state.currentNode = null;
    state.history = [];

    overviewView.hidden = true;
    graphView.hidden = false;

    graphView.classList.remove("graph-revealing", "nodes-show", "detail-show");
    graphView.classList.add("graph-preparing", "nodes-wait", "detail-wait");

    renderGraph();

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const graphPanel = document.querySelector(".graph-panel");
        const targetRect = graphPanel.getBoundingClientRect();
        const targetStyle = getComputedStyle(graphPanel);

        transitionLayer.classList.add("is-moving");

        Object.assign(transitionLayer.style, {
          left: `${targetRect.left}px`,
          top: `${targetRect.top}px`,
          width: `${targetRect.width}px`,
          height: `${targetRect.height}px`,
          borderRadius: targetStyle.borderRadius
        });

        window.setTimeout(() => {
          graphView.classList.remove("graph-preparing");
          graphView.classList.add("graph-revealing");
        }, 360);

        window.setTimeout(() => {
          transitionLayer.classList.add("is-dissolving");
          graphView.classList.remove("nodes-wait");
          graphView.classList.add("nodes-show");
        }, 455);

        window.setTimeout(() => {
          graphView.classList.remove("detail-wait");
          graphView.classList.add("detail-show");
        }, 565);

        window.setTimeout(() => {
          transitionLayer.classList.remove("is-active", "is-moving", "is-dissolving");
          transitionLayer.innerHTML = "";
          transitionLayer.removeAttribute("style");

          areaGrid.classList.remove("is-transitioning");
  detailPanel.hidden = true;
  childLayer.classList.remove("has-deep-focus");
  deepLayerWrap.hidden = true;
          card.classList.remove("is-selected");

          graphView.classList.remove(
            "graph-revealing",
            "nodes-show",
            "detail-show"
          );
        }, 760);
      });
    });
  }, 150);
}

function enterArea(areaId) {
  const area = getArea(areaId);
  if (!area) return;

  state.mode = "graph";
  state.currentArea = areaId;
  state.currentNode = null;
  state.history = [];

  overviewView.hidden = true;
  graphView.hidden = false;
  detailPanel.hidden = true;

  renderGraph();
}

function enterNode(nodeId) {
  const node = state.data.nodes[nodeId];
  if (!node) return;

  if (!node.children?.length) {
    showDetails(node);
    return;
  }

  state.currentNode = nodeId;
  renderGraph();
}

function goBack() {
  if (state.history.length) {
    state.currentNode = state.history.pop() || null;
    renderGraph();
    return;
  }

  if (state.currentNode) {
    state.currentNode = null;
    renderGraph();
    return;
  }

  renderOverview();
}


function renderChildPreview(node) {
  // Temporary hover preview only. Persistent state is not changed.
  childLayer.innerHTML = "";
  childLayer.classList.remove("has-deep-focus");
  childLayer.classList.add("is-hover-preview");
  deepLayerWrap.hidden = true;
  deepLayer.innerHTML = "";

  if (!node?.children?.length) {
    childLayerWrap.hidden = true;
    return;
  }

  childLayerWrap.hidden = false;

  node.children.forEach((childId) => {
    const child = state.data.nodes[childId];
    if (!child) return;

    const preview = makeLayerNode(child, childId);
    preview.tabIndex = -1;
    preview.setAttribute("aria-hidden", "true");
    childLayer.appendChild(preview);
  });
}

function restorePersistentLayers() {
  childLayer.classList.remove("is-hover-preview");
  renderGraph();
}

function renderGraph() {
  const area = getArea(state.currentArea);
  if (!area) return;

  contextTitle.textContent = area.label;

  graphNodes.innerHTML = "";
  childLayer.innerHTML = "";
  deepLayer.innerHTML = "";

  // Every render starts from a clean layered DOM state.
  childLayerWrap.hidden = true;
  deepLayerWrap.hidden = true;
  childLayer.classList.remove("has-deep-focus", "is-hover-preview");

  const selectedNode = state.currentNode
    ? state.data.nodes[state.currentNode]
    : null;

  const parentNodeId = state.history.length
    ? state.history[state.history.length - 1]
    : null;

  const parentNode = parentNodeId
    ? state.data.nodes[parentNodeId]
    : null;

  // Top command layer always shows the area's commands.
  area.commands.forEach((nodeId) => {
    const node = state.data.nodes[nodeId];
    if (!node) return;

    const button = makeLayerNode(node, nodeId);

    const activeTopId = parentNodeId || state.currentNode;
    if (nodeId === activeTopId) {
      button.classList.add("is-selected");
    }

    button.addEventListener("mouseenter", () => {
      showDetails(node);
      renderChildPreview(node);
    });

    button.addEventListener("mouseleave", () => {
      restorePersistentLayers();
    });

    button.addEventListener("focus", () => {
      showDetails(node);
      renderChildPreview(node);
    });

    button.addEventListener("blur", () => {
      restorePersistentLayers();
    });

    button.addEventListener("click", () => {
      // Switching top-level commands always clears any previous branch state.
      state.history = [];
      deepLayerWrap.hidden = true;
      deepLayer.innerHTML = "";
      childLayer.classList.remove("has-deep-focus");

      if (node.children?.length) {
        state.currentNode = nodeId;
        renderGraph();
        return;
      }

      // Leaf top-level command:
      // remove the previous command's options/concepts completely.
      state.currentNode = null;
      childLayerWrap.hidden = true;
      childLayer.innerHTML = "";

      showDetails(node);
      renderBreadcrumb();
    });

    graphNodes.appendChild(button);
  });

  // LEVEL 2:
  // If we are deep, preserve the parent's option layer.
  const level2Source = parentNode || selectedNode;

  if (level2Source?.children?.length) {
    childLayerWrap.hidden = false;
    childLayer.classList.toggle("has-deep-focus", Boolean(parentNode));

    level2Source.children.forEach((childId) => {
      const child = state.data.nodes[childId];
      if (!child) return;

      const button = makeLayerNode(child, childId);

      if (parentNode && childId === state.currentNode) {
        button.classList.add("is-deep-selected");
      }

      button.addEventListener("mouseenter", () => showDetails(child));
      button.addEventListener("focus", () => showDetails(child));

      button.addEventListener("click", () => {
        if (child.children?.length) {
          state.history = [level2Source === parentNode ? parentNodeId : state.currentNode];
          state.currentNode = childId;
          renderGraph();
          return;
        }

        // If we are currently inside a deeper branch (for example ls → -l),
        // clicking a dimmed sibling option exits that deep branch first.
        // The parent command remains selected, the deep layer disappears,
        // sibling options return to normal visibility, and details switch
        // to the clicked option.
        if (parentNode) {
          state.currentNode = parentNodeId;
          state.history = [];
          renderGraph();
          showDetails(child);
          renderBreadcrumb();
          return;
        }

        showDetails(child);
      });

      childLayer.appendChild(button);
    });
  } else {
    childLayerWrap.hidden = true;
    childLayer.classList.remove("has-deep-focus");
  }

  // LEVEL 3:
  // Deep child concepts stay below the preserved option layer.
  if (parentNode && selectedNode?.children?.length) {
    deepLayerWrap.hidden = false;

    selectedNode.children.forEach((deepId) => {
      const deepNode = state.data.nodes[deepId];
      if (!deepNode) return;

      const button = makeLayerNode(deepNode, deepId);

      button.addEventListener("mouseenter", () => showDetails(deepNode));
      button.addEventListener("focus", () => showDetails(deepNode));
      button.addEventListener("click", () => showDetails(deepNode));

      deepLayer.appendChild(button);
    });

    showDetails(selectedNode);
  } else {
    deepLayerWrap.hidden = true;

    if (selectedNode) {
      showDetails(selectedNode);
    } else {
      // No command selected: keep the detail card hidden.
      detailPanel.hidden = true;
    }
  }

  if (selectedNode || parentNode) {
    detailPanel.hidden = false;
  }

  renderBreadcrumb();
}

function makeLayerNode(node, nodeId) {
  const button = document.createElement("button");
  const hasChildren = Boolean(node.children?.length);

  button.className = `layer-node${hasChildren ? " has-children" : ""}`;
  button.type = "button";
  button.dataset.nodeId = nodeId;
  button.textContent = node.label;

  return button;
}

function showDetails(item, forcedType = null) {
  if (!item) return;

  detailPanel.hidden = false;

  detailType.textContent = forcedType || item.type || "Context";
  detailTitle.textContent = item.label || "Context";
  detailDescription.textContent = item.description || "";

  if (item.syntax) {
    detailSyntax.hidden = false;
    detailSyntax.textContent = item.syntax;
  } else {
    detailSyntax.hidden = true;
    detailSyntax.textContent = "";
  }

  if (item.safety) {
    detailSafety.hidden = false;
    detailSafety.textContent = `Safety: ${item.safety}`;
  } else {
    detailSafety.hidden = true;
    detailSafety.textContent = "";
  }
}

function renderBreadcrumb() {
  breadcrumb.innerHTML = "";

  const addCrumb = (label, handler = null) => {
    if (breadcrumb.childNodes.length) {
      const sep = document.createElement("span");
      sep.textContent = "›";
      breadcrumb.appendChild(sep);
    }

    if (handler) {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "crumb-button";
      button.textContent = label;
      button.addEventListener("click", handler);
      breadcrumb.appendChild(button);
    } else {
      const span = document.createElement("span");
      span.textContent = label;
      breadcrumb.appendChild(span);
    }
  };

  addCrumb("Linux", state.mode === "overview" ? null : renderOverview);

  if (state.currentArea) {
    const area = getArea(state.currentArea);

    addCrumb(
      area.label,
      state.currentNode
        ? () => {
            state.currentNode = null;
            renderGraph();
          }
        : null
    );
  }

  if (state.currentNode) {
    const node = state.data.nodes[state.currentNode];
    addCrumb(node.label);
  }
}


function getArea(id) {
  return state.data.areas.find((area) => area.id === id);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}


brandHome.addEventListener("click", renderOverview);

window.addEventListener("resize", () => {
  // Layered layout is CSS-driven; no geometry recalculation is required.
});

loadData().catch((error) => {
  console.error(error);
  areaGrid.innerHTML = `<p>Could not load the prototype data. Run the site through a local web server such as VS Code Live Server.</p>`;
});
