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
 * desktop tooltip behavior, pointer-reactive motion,
 * focus-based color theming, whole-cloud parallax,
 * magnetic pointer interaction, and dynamic connector lines.
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


const commandThemes = {
  pwd: "theme-sky",
  cd: "theme-lilac",
  ls: "theme-mint",
  cat: "theme-peach",
  grep: "theme-yellow",
  mkdir: "theme-pink",
  touch: "theme-aqua",
  cp: "theme-lavender",
  mv: "theme-sage",
  rm: "theme-coral"
};

function getThemeClass(focusId = currentFocus) {
  if (focusId === "linux") {
    return "";
  }

  const rootCommand = focusId.split("-")[0];
  return commandThemes[rootCommand] ?? "theme-neutral";
}

const motionState = {
  pointerX: 0,
  pointerY: 0,
  inside: false,
  animationFrameId: null,
  cleanup: null
};


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
  const focusTheme = getThemeClass();
  if (focusTheme) {
    centerButton.classList.add(focusTheme);
  }
  centerButton.textContent = view.center;
  cloudNodes.appendChild(centerButton);

  const surroundingNodes = document.createElement("div");
  surroundingNodes.className = "command-variants";

  const nodeCount = view.nodes.length;

  view.nodes.forEach((node, index) => {
    const button = document.createElement("button");
    button.className = "command-node";

    const nodeTheme =
      currentFocus === "linux"
        ? commandThemes[node.id] ?? "theme-neutral"
        : focusTheme || "theme-neutral";

    button.classList.add(nodeTheme);
    button.style.setProperty("--enter-delay", `${index * 45}ms`);
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
  enableCloudMotion();
}

function enableCloudMotion() {
  if (motionState.cleanup) {
    motionState.cleanup();
    motionState.cleanup = null;
  }

  if (motionState.animationFrameId) {
    cancelAnimationFrame(motionState.animationFrameId);
    motionState.animationFrameId = null;
  }

  cloudNodes.style.setProperty("--cloud-x", "0px");
  cloudNodes.style.setProperty("--cloud-y", "0px");

  const connectorLayer = createConnectorLayer();

  if (usesTouchInteraction) {
    updateConnectorLines(connectorLayer);
    return;
  }

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    updateConnectorLines(connectorLayer);
    return;
  }

  const animatedNodes = [
    ...cloudNodes.querySelectorAll(".command-variants .command-node")
  ];

  if (!animatedNodes.length) {
    return;
  }

  animatedNodes.forEach((node) => {
    node.dataset.motionPhase = String(Math.random() * Math.PI * 2);
    node.dataset.motionRadius = String(3 + Math.random() * 4);
    node.dataset.motionSpeed = String(0.0005 + Math.random() * 0.0006);
    node.dataset.magnetX = "0";
    node.dataset.magnetY = "0";
  });

  let cloudTargetX = 0;
  let cloudTargetY = 0;
  let cloudCurrentX = 0;
  let cloudCurrentY = 0;

  const handlePointerMove = (event) => {
    const rect = cloudNodes.getBoundingClientRect();

    motionState.pointerX = event.clientX - rect.left;
    motionState.pointerY = event.clientY - rect.top;
    motionState.inside = true;

    const normalizedX = motionState.pointerX / rect.width - 0.5;
    const normalizedY = motionState.pointerY / rect.height - 0.5;

    cloudTargetX = normalizedX * 8;
    cloudTargetY = normalizedY * 6;
  };

  const handlePointerLeave = () => {
    motionState.inside = false;
    cloudTargetX = 0;
    cloudTargetY = 0;
  };

  cloudNodes.addEventListener("pointermove", handlePointerMove);
  cloudNodes.addEventListener("pointerleave", handlePointerLeave);

  motionState.cleanup = () => {
    cloudNodes.removeEventListener("pointermove", handlePointerMove);
    cloudNodes.removeEventListener("pointerleave", handlePointerLeave);
  };

  const animate = (time) => {
    cloudCurrentX += (cloudTargetX - cloudCurrentX) * 0.05;
    cloudCurrentY += (cloudTargetY - cloudCurrentY) * 0.05;

    cloudNodes.style.setProperty("--cloud-x", `${cloudCurrentX.toFixed(2)}px`);
    cloudNodes.style.setProperty("--cloud-y", `${cloudCurrentY.toFixed(2)}px`);

    const cloudRect = cloudNodes.getBoundingClientRect();

    animatedNodes.forEach((node) => {
      const nodeRect = node.getBoundingClientRect();

      const nodeCenterX =
        nodeRect.left - cloudRect.left + nodeRect.width / 2;
      const nodeCenterY =
        nodeRect.top - cloudRect.top + nodeRect.height / 2;

      const phase = Number(node.dataset.motionPhase);
      const radius = Number(node.dataset.motionRadius);
      const speed = Number(node.dataset.motionSpeed);

      const floatX = Math.cos(time * speed + phase) * radius;
      const floatY = Math.sin(time * speed + phase) * radius * 0.7;

      let targetMagnetX = 0;
      let targetMagnetY = 0;

      if (motionState.inside) {
        const dx = motionState.pointerX - nodeCenterX;
        const dy = motionState.pointerY - nodeCenterY;
        const distance = Math.hypot(dx, dy);

        const influenceRadius = 145;
        const maxPull = 46;

        if (distance < influenceRadius) {
          const strength = 1 - distance / influenceRadius;
          const easedStrength = strength * strength;

          targetMagnetX = Math.max(
            -maxPull,
            Math.min(maxPull, dx * easedStrength * 0.72)
          );

          targetMagnetY = Math.max(
            -maxPull,
            Math.min(maxPull, dy * easedStrength * 0.72)
          );
        }
      }

      const currentMagnetX = Number(node.dataset.magnetX || 0);
      const currentMagnetY = Number(node.dataset.magnetY || 0);

      const nextMagnetX =
        currentMagnetX + (targetMagnetX - currentMagnetX) * 0.16;
      const nextMagnetY =
        currentMagnetY + (targetMagnetY - currentMagnetY) * 0.16;

      node.dataset.magnetX = String(nextMagnetX);
      node.dataset.magnetY = String(nextMagnetY);

      node.style.setProperty(
        "--motion-x",
        `${(floatX + nextMagnetX).toFixed(2)}px`
      );

      node.style.setProperty(
        "--motion-y",
        `${(floatY + nextMagnetY).toFixed(2)}px`
      );
    });

    updateConnectorLines(connectorLayer);
    motionState.animationFrameId = requestAnimationFrame(animate);
  };

  motionState.animationFrameId = requestAnimationFrame(animate);
}

function createConnectorLayer() {
  const existingLayer = cloudNodes.querySelector(".connector-layer");

  if (existingLayer) {
    existingLayer.remove();
  }

  const svg = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg"
  );

  svg.classList.add("connector-layer");
  svg.setAttribute("aria-hidden", "true");
  svg.setAttribute("focusable", "false");

  const surroundingNodes = [
    ...cloudNodes.querySelectorAll(".command-variants .command-node")
  ];

  surroundingNodes.forEach((node, index) => {
    const line = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "line"
    );

    line.dataset.nodeIndex = String(index);
    line.classList.add("connector-line");
    svg.appendChild(line);
  });

  cloudNodes.prepend(svg);
  return svg;
}

function updateConnectorLines(svg) {
  if (!svg) {
    return;
  }

  const centerNode = cloudNodes.querySelector(".main-command");
  const surroundingNodes = [
    ...cloudNodes.querySelectorAll(".command-variants .command-node")
  ];
  const lines = [...svg.querySelectorAll(".connector-line")];

  if (!centerNode || !surroundingNodes.length) {
    return;
  }

  const cloudRect = cloudNodes.getBoundingClientRect();
  const centerRect = centerNode.getBoundingClientRect();

  const centerX =
    centerRect.left - cloudRect.left + centerRect.width / 2;
  const centerY =
    centerRect.top - cloudRect.top + centerRect.height / 2;

  svg.setAttribute("viewBox", `0 0 ${cloudRect.width} ${cloudRect.height}`);

  surroundingNodes.forEach((node, index) => {
    const line = lines[index];

    if (!line) {
      return;
    }

    const nodeRect = node.getBoundingClientRect();

    const nodeX =
      nodeRect.left - cloudRect.left + nodeRect.width / 2;
    const nodeY =
      nodeRect.top - cloudRect.top + nodeRect.height / 2;

    line.setAttribute("x1", centerX.toFixed(2));
    line.setAttribute("y1", centerY.toFixed(2));
    line.setAttribute("x2", nodeX.toFixed(2));
    line.setAttribute("y2", nodeY.toFixed(2));
  });
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
