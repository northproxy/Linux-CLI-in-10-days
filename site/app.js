/**
 * Script: app.js
 *
 * Purpose:
 * Loads Linux CLI knowledge from JSON and renders the interactive Command Cloud.
 *
 * Project:
 * Linux CLI in 10 Days — learning and portfolio project.
 *
 * Learning focus:
 * Vanilla JavaScript, JSON loading, DOM manipulation, interaction state,
 * contextual navigation, touch interaction, radial positioning,
 * and desktop tooltip behavior.
 *
 * Lifecycle:
 * Permanent project component.
 */

const cloudNodes = document.getElementById("cloud-nodes");
const result = document.getElementById("command-result");
const backButton = document.getElementById("back-button");
const breadcrumb = document.getElementById("breadcrumb");

let cloudData = {};
let currentFocus = "linux";
const focusHistory = [];
let previewedTouchNode = null;

const usesTouchInteraction = window.matchMedia(
  "(hover: none), (pointer: coarse)"
).matches;

const tooltip = document.createElement("div");
tooltip.className = "cloud-tooltip";
tooltip.setAttribute("role", "tooltip");
tooltip.hidden = true;
document.body.appendChild(tooltip);

async function loadKnowledgeMap() {
  try {
    const response = await fetch("../data/map.json");

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const knowledgeMap = await response.json();
    cloudData = knowledgeMap.cloud;
    renderCloud();
  } catch (error) {
    console.error("Could not load data/map.json:", error);
    result.textContent =
      "Could not load the Linux CLI knowledge map. Check the browser console.";
  }
}

function renderCloud() {
  const view = cloudData[currentFocus];

  if (!view) {
    result.textContent = `Unknown cloud focus: ${currentFocus}`;
    return;
  }

  hideTooltip();
  updateNavigation();
  cloudNodes.innerHTML = "";

  const centerButton = document.createElement("button");
  centerButton.className = "command-node main-command";
  centerButton.textContent = view.center;
  cloudNodes.appendChild(centerButton);

  const surroundingNodes = document.createElement("div");
  surroundingNodes.className = "command-variants";

  const nodeCount = view.nodes.length;

  view.nodes.forEach((node, index) => {
    const button = document.createElement("button");
    button.className = "command-node";
    button.textContent = node.label;

    positionNode(button, index, nodeCount);

    button.addEventListener("mouseenter", () => {
      if (!usesTouchInteraction) {
        showTooltip(button, node);
      }
      showPreview(node);
    });

    button.addEventListener("mouseleave", () => {
      if (!usesTouchInteraction) {
        hideTooltip();
      }
      clearPreview();
    });

    button.addEventListener("focus", () => {
      if (!usesTouchInteraction) {
        showTooltip(button, node);
      }
    });

    button.addEventListener("blur", () => {
      if (!usesTouchInteraction) {
        hideTooltip();
      }
    });

    button.addEventListener("click", () => {
      if (usesTouchInteraction) {
        handleTouchNode(button, node);
        return;
      }
      handleNodeClick(node);
    });

    surroundingNodes.appendChild(button);
  });

  cloudNodes.appendChild(surroundingNodes);
}

function positionNode(button, index, nodeCount) {
  const angleStep = (2 * Math.PI) / nodeCount;
  const startAngle = -Math.PI / 2;
  const angle = startAngle + index * angleStep;

  const radiusX = 42;
  const radiusY = 38;

  const x = 50 + radiusX * Math.cos(angle);
  const y = 50 + radiusY * Math.sin(angle);

  button.style.left = `${x}%`;
  button.style.top = `${y}%`;
}

function updateNavigation() {
  const path = [...focusHistory, currentFocus]
    .map((focusId) => {
      const label = cloudData[focusId]?.center ?? focusId;
      return label === "LINUX" ? "Linux" : label;
    })
    .join(" › ");

  breadcrumb.textContent = path;
  backButton.hidden = focusHistory.length === 0;
}

function handleNodeClick(node) {
  hideTooltip();

  if (node.target && cloudData[node.target]) {
    focusHistory.push(currentFocus);
    currentFocus = node.target;

    clearTouchSelection();
    renderCloud();

    result.textContent = `Explore ${cloudData[currentFocus].center} options.`;
    return;
  }

  showPreview(node);
}

function getPreviewText(node) {
  if (node.syntax) {
    return `${node.syntax} — ${node.description}`;
  }
  return node.description;
}

function showPreview(node) {
  result.textContent = getPreviewText(node);
}

function clearPreview() {
  if (currentFocus === "linux") {
    result.textContent = "Select a command to explore.";
    return;
  }

  result.textContent = `Explore ${cloudData[currentFocus].center} options.`;
}

function showTooltip(button, node) {
  tooltip.textContent = getPreviewText(node);
  tooltip.hidden = false;

  const buttonRect = button.getBoundingClientRect();
  const tooltipRect = tooltip.getBoundingClientRect();

  let left =
    buttonRect.left +
    buttonRect.width / 2 -
    tooltipRect.width / 2;

  let top =
    buttonRect.top -
    tooltipRect.height -
    12;

  const viewportPadding = 12;

  left = Math.max(
    viewportPadding,
    Math.min(
      left,
      window.innerWidth - tooltipRect.width - viewportPadding
    )
  );

  if (top < viewportPadding) {
    top = buttonRect.bottom + 12;
  }

  tooltip.style.left = `${left}px`;
  tooltip.style.top = `${top}px`;
}

function hideTooltip() {
  tooltip.hidden = true;
}

function handleTouchNode(button, node) {
  if (previewedTouchNode !== node.id) {
    clearTouchSelection();
    previewedTouchNode = node.id;
    button.classList.add("is-previewed");
    showPreview(node);
    return;
  }

  previewedTouchNode = null;
  handleNodeClick(node);
}

function clearTouchSelection() {
  document
    .querySelectorAll(".command-node.is-previewed")
    .forEach((node) => {
      node.classList.remove("is-previewed");
    });

  previewedTouchNode = null;
}

backButton.addEventListener("click", () => {
  const previousFocus = focusHistory.pop();

  if (!previousFocus) {
    return;
  }

  hideTooltip();
  currentFocus = previousFocus;
  clearTouchSelection();
  renderCloud();
  clearPreview();
});

window.addEventListener("resize", hideTooltip);
window.addEventListener("scroll", hideTooltip, true);

loadKnowledgeMap();
