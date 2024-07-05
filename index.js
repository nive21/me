import {
  projectNames,
  projectPages,
  projectForces,
  projects,
  data,
} from "./constant.js";

let currentlyHoveredObject = null;

// Function to create a project section
function createProjectSection(projectName, smallProject = false) {
  const project = data[projectName];
  const card = document.createElement("div");
  card.className = `card ${smallProject ? "card-small" : "card-large"}`;
  card.addEventListener("click", () => {
    window.open(projectPages[projectName], "_blank");
  });

  const content = document.createElement("div");
  content.className = "content-container";

  const topContainer = document.createElement("div");
  topContainer.className = "top-container";

  const tagsContainer = document.createElement("div");
  tagsContainer.className = "tags-container";

  const titleContainer = document.createElement("div");
  titleContainer.className = "title-container";

  const img = document.createElement("img");
  img.src = project.sameSizeIcon;
  img.alt = projectName;
  img.className = "card-icon";

  const title = document.createElement("h1");
  title.textContent = project?.title ?? "";

  const contextContainer = document.createElement("div");
  contextContainer.className = "context-container";

  const problemText = document.createElement("p");
  problemText.textContent = project.problemText;

  const projectPage = document.createElement("button");
  projectPage.className = "page-button";
  projectPage.textContent = "READ MORE ->";

  card.appendChild(content);
  content.appendChild(topContainer);
  topContainer.appendChild(tagsContainer);
  topContainer.appendChild(titleContainer);
  titleContainer.appendChild(img);
  titleContainer.appendChild(title);
  topContainer.appendChild(contextContainer);
  contextContainer.appendChild(problemText);
  content.appendChild(projectPage);

  if (!smallProject) {
    const mainImage = document.createElement("img");
    mainImage.className = "main-img";
    mainImage.src = project?.mainImage;
    mainImage.alt = projectName;
    card.appendChild(mainImage);
  }

  (project?.tags ?? []).forEach((tag) => {
    const tagChip = document.createElement("span");
    tagChip.className = "tag";
    tagChip.textContent = tag;
    tagsContainer.appendChild(tagChip);
  });

  return card;
}

function createSideBySideProjects(project1, project2) {
  const section = document.createElement("div");
  section.className = "sbs-section";

  section.appendChild(createProjectSection(project1, true));
  section.appendChild(createProjectSection(project2, true));

  return section;
}

const tooltips = document.getElementsByClassName("object-tooltip");
const b2c = document.getElementById("b2c-trigger");
const dataviz = document.getElementById("dataviz-trigger");
const ur = document.getElementById("ur-trigger");
const joulea = document.getElementById("joulea-trigger");
const b2cTooltip = document.getElementById("b2c-object-tooltip");
const datavizTooltip = document.getElementById("dataviz-object-tooltip");
const urTooltip = document.getElementById("ur-object-tooltip");

window.onmousemove = function (e) {
  const x = e.clientX,
    y = e.clientY + window.scrollY;

  for (const tooltip of tooltips) {
    tooltip.style.top = y + 20 + "px";
    tooltip.style.left = x - 120 + "px";
  }
};

async function createSphere(containerElement, projectList) {
  const sW = containerElement.offsetWidth;
  const {
    Engine,
    Render,
    Runner,
    World,
    Bodies,
    Bounds,
    Body,
    Mouse,
    MouseConstraint,
    Events,
    Composite,
  } = Matter;

  // create an engine
  const engine = Engine.create();

  // create a renderer
  const render = Render.create({
    element: containerElement,
    engine: engine,
    options: {
      isSensor: true,
      width: containerElement.offsetWidth,
      height: containerElement.offsetHeight,
      background: "transparent",
      wireframes: false,
    },
  });

  const stack = projectList.map((project) => {
    return Bodies.circle(sW / 2, sW / 2, project.size, {
      restitution: 0.5,
      label: project.projectName,
      render: {
        fillStyle: "#FFFFFF40",
        strokeStyle: "white",
        lineWidth: 4,
        sprite: {
          texture: data?.[project.projectName]?.icon,
        },
      },
    });
  });

  Composite.add(engine.world, stack);

  // add mouse control
  const mouse = Mouse.create(render.canvas),
    mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false,
        },
      },
    });

  Composite.add(engine.world, mouseConstraint);

  // keep the mouse in sync with rendering
  render.mouse = mouse;

  Render.run(render);

  // Circles grouping the objects
  const r = sW / 2,
    parts = [],
    pegCount = 32;

  for (let i = 0; i < pegCount; i++) {
    const angle2 = (Math.PI / pegCount) * (1 + 2 * i),
      x2 = Math.cos(angle2),
      y2 = Math.sin(angle2),
      cx2 = x2 * r + sW / 2,
      cy2 = y2 * r + sW / 2,
      rect = addRect({
        x: cx2,
        y: cy2,
        w: (10 / 1000) * sW,
        h: (100 / 1000) * sW,
        options: {
          angle: angle2,
          isStatic: true,
          density: 1,
          render: {
            fillStyle: "transparent",
            strokeStyle: "transparent",
            lineWidth: 0,
          },
        },
      });
    parts.push(rect);
  }

  function addBody(...bodies) {
    World.add(engine.world, ...bodies);
  }

  function addRect({ x = 0, y = 0, w = 10, h = 10, options = {} } = {}) {
    let body = Bodies.rectangle(x, y, w, h, options);
    addBody(body);
    return body;
  }

  // create runner
  const runner = Runner.create();

  // Open details on a new page when clicked
  Events.on(mouseConstraint, "mousedown", (event) => {
    if (event?.source?.body?.label) {
      // Scrolls to that height
      // const projectIndex = Object.values(cardOpened).indexOf(
      //   event.source.body.label
      // );
      // const yPosition = (projectIndex + 1) * window.innerHeight;
      // window.scrollTo(0, yPosition);
      window.open(projectPages[event.source.body.label], "_blank");
    }

    // Manually trigger the end of the interaction
    MouseConstraint.update(mouseConstraint, mouse);
    mouseConstraint.constraint.pointA = null;
    mouseConstraint.constraint.bodyB = null;
    mouseConstraint.constraint.pointB = null;
    mouse.button = -1; // Reset the mouse button state to prevent sticking
  });

  // Flag to control jiggling
  let isHovering = false;

  const jiggleObjects = () => {
    for (const item of stack) {
      if (!isHovering) {
        const force = projectForces[item.label];
        // Apply a small random force to the box
        Body.applyForce(item, item.position, {
          x: (Math.random() - 0.5) * force, // Random x force
          y: (Math.random() - 0.5) * force, // Random y force
        });
      } else {
        Body.applyForce(item, item.position, {
          x: 0,
          y: 0,
        });
      }
    }
  };

  // Update mouse hover status based on mouse events
  Matter.Events.on(mouseConstraint, "mousemove", function (event) {
    // Check if hovered for each item
    isHovering = stack.some((item) => {
      var mousePosition = event.mouse.position;
      render.canvas.style.cursor = "pointer";
      return Bounds.contains(item.bounds, mousePosition);
    });

    stack.forEach((item) => {
      const mousePosition = event.mouse.position;

      if (Bounds.contains(item.bounds, mousePosition)) {
        currentlyHoveredObject = item.label;

        if (item.label === projectNames.DHY) {
          b2cTooltip.style.visibility = "visible";
        } else {
          b2cTooltip.style.visibility = "hidden";
        }
        if (item.label === projectNames.TABLEAU) {
          datavizTooltip.style.visibility = "visible";
        } else {
          datavizTooltip.style.visibility = "hidden";
        }
        if (item.label === projectNames.REDDIT) {
          urTooltip.style.visibility = "visible";
        } else {
          urTooltip.style.visibility = "hidden";
        }
      }
    });

    if (!isHovering) {
      currentlyHoveredObject = null;
      b2cTooltip.style.visibility = "hidden";
      datavizTooltip.style.visibility = "hidden";
      urTooltip.style.visibility = "hidden";
    }

    jiggleObjects();
  });

  // Continuously apply forces in the update loop
  Events.on(engine, "beforeUpdate", function () {
    jiggleObjects();
  });

  // run the engine
  Runner.run(runner, engine);

  (function render() {
    for (const [_, item] of stack.entries()) {
      if (b2c.classList?.length === 2 && item.label === projectNames.DHY) {
        item.render.sprite.texture = data?.[item.label]?.highlightedIcon;
        break;
      } else {
        item.render.sprite.texture = data?.[item.label]?.icon;
      }

      if (ur.classList?.length === 2 && item.label === projectNames.REDDIT) {
        item.render.sprite.texture = data?.[item.label]?.highlightedIcon;
        break;
      } else {
        item.render.sprite.texture = data?.[item.label]?.icon;
      }

      if (
        dataviz.classList?.length === 2 &&
        item.label === projectNames.TABLEAU
      ) {
        item.render.sprite.texture = data?.[item.label]?.highlightedIcon;
        break;
      } else {
        item.render.sprite.texture = data?.[item.label]?.icon;
      }

      if (joulea.classList?.length === 2 && item.label === projectNames.JOU) {
        item.render.sprite.texture = data?.[item.label]?.highlightedIcon;
        break;
      } else {
        item.render.sprite.texture = data?.[item.label]?.icon;
      }

      if (currentlyHoveredObject === item.label) {
        item.render.sprite.texture = data?.[item.label]?.highlightedIcon;
      } else {
        item.render.sprite.texture = data?.[item.label]?.icon;
      }
    }

    requestAnimationFrame(render);
  })();
}

function createSideBySideSections(left, right) {
  const superSection = document.createElement("div");
  superSection.className = "sbs-super-section";

  superSection.appendChild(left);
  superSection.appendChild(right);

  return superSection;
}

// Reference: https://codepen.io/Zajno/pen/NWOLdOm
window.addEventListener("load", async function () {
  createSphere(document.querySelector("#sphere-uxd"), projects.uxd);
  createSphere(document.querySelector("#sphere-uxr"), projects.dataViz);
  createSphere(document.querySelector("#sphere-viz"), projects.uxr);

  // The project list container
  const projectsList = document.querySelector(".projects-list");

  projectsList.appendChild(
    createSideBySideSections(
      createProjectSection(projectNames.DHY),
      createProjectSection(projectNames.SCROLLY)
    )
  );
  projectsList.appendChild(
    createSideBySideSections(
      createProjectSection(projectNames.TABLEAU),
      createSideBySideProjects(projectNames.REDDIT, projectNames.SPEAKER)
    )
  );
  projectsList.appendChild(
    createSideBySideSections(
      createSideBySideProjects(projectNames.UI, projectNames.FOOD),
      createProjectSection(projectNames.CIRCLE)
    )
  );
});

const arrowButton = document.getElementById("arrow");

arrowButton.addEventListener("click", function (_) {
  window.scrollTo(0, window.scrollY + window.innerHeight);
});

window.addEventListener(
  "scroll",
  function (_) {
    if (this.scrollY > 50) {
      arrowButton.className = "hide-arrow";
    } else {
      arrowButton.classList.remove("hide-arrow");
    }
  },
  false
);
