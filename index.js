const projectNames = {
  POKE: "POKE study",
  JOU: "Joulea",
  DHY: "Dhyana",
  UI: "UI Principles",
  TABLEAU: "Tableau",
  SCROLLY: "Dataviz scrollytelling",
  REDDIT: "Reddit study",
  SPEAKER: "SMart speaker",
  FOOD: "Participation study",
};

const projectPages = {
  [projectNames.POKE]: "pages/pokemon-asl-game.html",
  [projectNames.JOU]: "pages/joulea.html",
  [projectNames.DHY]: "pages/dhyana.html",
  [projectNames.UI]: "pages/dataviz-learning-tool.html",
  [projectNames.TABLEAU]: "pages/tableau-competition.html",
  [projectNames.SCROLLY]: "pages/police-violence.html",
  [projectNames.REDDIT]: "pages/reddit-study.html",
  [projectNames.SPEAKER]: "pages/smart-speaker.html",
  [projectNames.FOOD]: "pages/participation-study.html",
};

const projects = {
  uxd: [
    {
      projectName: projectNames.POKE,
      description: "",
      projectDuration: "",
      icon: "./assets/projects/dhyana.svg",
      size: 20,
    },
    {
      projectName: projectNames.JOU,
      description: "",
      projectDuration: "",
      icon: "./assets/projects/dhyana.svg",
      size: 35,
    },
    {
      projectName: projectNames.DHY,
      description: "",
      projectDuration: "",
      icon: "./assets/projects/dhyana.svg",
      size: 50,
    },
  ],
  dataViz: [
    {
      projectName: projectNames.UI,
      description: "",
      projectDuration: "",
      icon: "./assets/projects/dhyana.svg",
      size: 20,
    },
    {
      projectName: projectNames.TABLEAU,
      description: "",
      projectDuration: "",
      icon: "./assets/projects/dhyana.svg",
      size: 15,
    },
    {
      projectName: projectNames.SCROLLY,
      description: "",
      projectDuration: "",
      icon: "./assets/projects/dhyana.svg",
      size: 30,
    },
  ],
  uxr: [
    {
      projectName: projectNames.REDDIT,
      description: "",
      projectDuration: "",
      icon: "./assets/projects/dhyana.svg",
      size: 20,
    },
    {
      projectName: projectNames.SPEAKER,
      description: "",
      projectDuration: "",
      icon: "./assets/projects/dhyana.svg",
      size: 15,
    },
    {
      projectName: projectNames.FOOD,
      description: "",
      projectDuration: "",
      icon: "./assets/projects/dhyana.svg",
      size: 30,
    },
  ],
};

// Reference: https://codepen.io/Zajno/pen/NWOLdOm
window.addEventListener("load", async function () {
  async function createSphere(containerElement, projectList) {
    const sW = containerElement.offsetWidth;
    const {
      Engine,
      Render,
      Runner,
      World,
      Bodies,
      Body,
      Common,
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
        restitution: 1,
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
      // if (Matter.Bounds.contains(stack[0].bounds, event.mouse.position)) {
      if (event?.source?.body?.label) {
        window.open(projectPages[event.source.body.label], "_blank");
      }

      // Manually trigger the end of the interaction
      Matter.MouseConstraint.update(mouseConstraint, mouse);
      mouseConstraint.constraint.pointA = null;
      mouseConstraint.constraint.bodyB = null;
      mouseConstraint.constraint.pointB = null;
      mouse.button = -1; // Reset the mouse button state to prevent sticking
      // }
    });

    // TODO: keep shaking and slow down when mouse moves nearby
    let shakeScene = function (engine, bodies) {
      for (let i = 0; i < bodies.length; i++) {
        let body = bodies[i];

        if (!body.isStatic) {
          let forceMagnitude = 0.1;

          // apply the force over a single update
          Body.applyForce(body, body.position, {
            x: forceMagnitude * Common.choose([1, -1]),
            y: -forceMagnitude,
          });
        }
      }
    };

    // Events.on(mouseConstraint, "mousemove", function (event) {
    //   // get bodies
    //   let foundPhysics = Matter.Query.point(stack, event.mouse.position);
    //   // shakeScene(engine, foundPhysics);
    // });

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
