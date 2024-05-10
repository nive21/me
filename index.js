const projectNames = {
  CIRCLE: "CIRCLE study",
  JOU: "Joulea",
  DHY: "Dhyana",
  UI: "UI Principles",
  TABLEAU: "Tableau",
  SCROLLY: "Dataviz scrollytelling",
  REDDIT: "Reddit study",
  SPEAKER: "Smart speaker",
  FOOD: "Participation study",
};

const projectPages = {
  [projectNames.CIRCLE]: "pages/social-balance.html",
  [projectNames.JOU]: "pages/joulea.html",
  [projectNames.DHY]: "pages/dhyana.html",
  [projectNames.UI]: "pages/dataviz-learning-tool.html",
  [projectNames.TABLEAU]: "pages/tableau-competition.html",
  [projectNames.SCROLLY]: "pages/police-violence.html",
  [projectNames.REDDIT]: "pages/reddit-study.html",
  [projectNames.SPEAKER]: "pages/smart-speaker.html",
  [projectNames.FOOD]: "pages/participation-study.html",
};

const projectForces = {
  [projectNames.CIRCLE]: 0.045,
  [projectNames.JOU]: 0.045,
  [projectNames.DHY]: 0.045,
  [projectNames.UI]: 0.026,
  [projectNames.TABLEAU]: 0.026,
  [projectNames.SCROLLY]: 0.026,
  [projectNames.REDDIT]: 0.018,
  [projectNames.SPEAKER]: 0.018,
  [projectNames.FOOD]: 0.018,
};

const projects = {
  uxd: [
    {
      projectName: projectNames.CIRCLE,
      description: "",
      projectDuration: "",
      icon: "./assets/projects/CIRCLE.svg",
      size: 45,
    },
    {
      projectName: projectNames.JOU,
      description: "",
      projectDuration: "",
      icon: "./assets/projects/JOU.svg",
      size: 45,
    },
    {
      projectName: projectNames.DHY,
      description: "",
      projectDuration: "",
      icon: "./assets/projects/DHY.svg",
      size: 45,
    },
  ],
  dataViz: [
    {
      projectName: projectNames.UI,
      description: "",
      projectDuration: "",
      icon: "./assets/projects/UI.svg",
      size: 35,
    },
    {
      projectName: projectNames.TABLEAU,
      description: "",
      projectDuration: "",
      icon: "./assets/projects/TABLEAU.svg",
      size: 35,
    },
    {
      projectName: projectNames.SCROLLY,
      description: "",
      projectDuration: "",
      icon: "./assets/projects/SCROLLY.svg",
      size: 35,
    },
  ],
  uxr: [
    {
      projectName: projectNames.REDDIT,
      description: "",
      projectDuration: "",
      icon: "./assets/projects/REDDIT.svg",
      size: 30,
    },
    {
      projectName: projectNames.SPEAKER,
      description: "",
      projectDuration: "",
      icon: "./assets/projects/SPEAKER.svg",
      size: 30,
    },
    {
      projectName: projectNames.FOOD,
      description: "",
      projectDuration: "",
      icon: "./assets/projects/FOOD.svg",
      size: 30,
    },
  ],
};

// Reference: https://codepen.io/Zajno/pen/NWOLdOm
window.addEventListener("load", async function () {
  async function createSphere(containerElement, projectList) {
    // const projectInfo = [...projects.uxd, ...projects.dataViz, ...projects.uxr];
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

    const stack = projectList.map((project) =>
      Bodies.circle(sW / 2, sW / 2, project.size, {
        restitution: 0.5,
        label: project.projectName,
        render: {
          fillStyle: "#FFFFFF40",
          strokeStyle: "white",
          lineWidth: 4,
          sprite: {
            texture: project.icon,
          },
        },
      })
    );

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
    r = sW / 2;
    parts = [];
    pegCount = 32;
    for (i = 0; i < pegCount; i++) {
      angle2 = (Math.PI / pegCount) * (1 + 2 * i);
      x2 = Math.cos(angle2);
      y2 = Math.sin(angle2);
      cx2 = x2 * r + sW / 2;
      cy2 = y2 * r + sW / 2;
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
      body = Bodies.rectangle(x, y, w, h, options);
      addBody(body);
      return body;
    }

    // create runner
    const runner = Runner.create();

    // Open details on a new page when clicked
    Events.on(mouseConstraint, "mousedown", (event) => {
      if (event?.source?.body?.label) {
        window.open(projectPages[event.source.body.label], "_self");
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
      console.log("stack ", stack);
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
        return Bounds.contains(item.bounds, mousePosition);
      });

      jiggleObjects();
    });

    // Continuously apply forces in the update loop
    Events.on(engine, "beforeUpdate", function () {
      jiggleObjects();
    });

    // run the engine
    Runner.run(runner, engine);
  }

  createSphere(document.querySelector("#sphere-uxd"), projects.uxd);
  createSphere(document.querySelector("#sphere-uxr"), projects.dataViz);
  createSphere(document.querySelector("#sphere-viz"), projects.uxr);
});

// JavaScript to open the modal
function openModal() {
  document.getElementById("modalOverlay").style.display = "block";
}

// JavaScript to close the modal
function closeModal() {
  document.getElementById("modalOverlay").style.display = "none";
}
