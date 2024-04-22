const projectNames = {
  GUN: "Gun study",
  PHI: "PHI",
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
  [projectNames.GUN]: "https://google.com",
  [projectNames.PHI]: "pinterest.com",
  [projectNames.JOU]: "https://google.com",
  [projectNames.DHY]: "https://google.com",
  [projectNames.UI]: "https://google.com",
  [projectNames.TABLEAU]: "https://google.com",
  [projectNames.SCROLLY]: "https://google.com",
  [projectNames.REDDIT]: "https://google.com",
  [projectNames.SPEAKER]: "https://google.com",
  [projectNames.FOOD]: "https://google.com",
};

const projects = {
  uxd: [
    {
      projectName: projectNames.GUN,
      description: "",
      projectDuration: "",
      icon: "./assets/projects/dhyana.svg",
      projectPage: "https://google.com",
      size: 20,
    },
    {
      projectName: projectNames.PHI,
      description: "",
      projectDuration: "",
      icon: "./assets/projects/dhyana.svg",
      projectPage: "https://google.com",
      size: 30,
    },
    {
      projectName: projectNames.JOU,
      description: "",
      projectDuration: "",
      icon: "./assets/projects/dhyana.svg",
      projectPage: "https://google.com",
      size: 35,
    },
    {
      projectName: projectNames.DHY,
      description: "",
      projectDuration: "",
      icon: "./assets/projects/dhyana.svg",
      projectPage: "https://google.com",
      size: 50,
    },
  ],
  dataViz: [
    {
      projectName: "UIPrin. data",
      description: "",
      projectDuration: "",
      icon: "./assets/projects/dhyana.svg",
      projectPage: "https://google.com",
      size: 20,
    },
    {
      projectName: "Tableau",
      description: "",
      projectDuration: "",
      icon: "./assets/projects/dhyana.svg",
      projectPage: "https://google.com",
      size: 15,
    },
    {
      projectName: "dataviz scrolly",
      description: "",
      projectDuration: "",
      icon: "./assets/projects/dhyana.svg",
      projectPage: "https://google.com",
      size: 30,
    },
  ],
  uxr: [
    {
      projectName: "Reddit study",
      description: "",
      projectDuration: "",
      icon: "./assets/projects/dhyana.svg",
      projectPage: "https://pinterest.com",
      size: 20,
    },
    {
      projectName: "Smart speaker",
      description: "",
      projectDuration: "",
      icon: "./assets/projects/dhyana.svg",
      projectPage: "https://abc.com",
      size: 15,
    },
    {
      projectName: "Participation study",
      description: "",
      projectDuration: "",
      icon: "./assets/projects/dhyana.svg",
      projectPage: "https://google.com",
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

    const openDetails = function (event) {
      window.open(projectPages[event.source.body.label], "_blank");
    };

    // Open details on a new page when clicked
    Events.on(mouseConstraint, "mousedown", openDetails);

    Events.off(mouseConstraint, "mouseup", openDetails);

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

    Events.on(mouseConstraint, "mousemove", function (event) {
      // get bodies
      let foundPhysics = Matter.Query.point(stack, event.mouse.position);
      // shakeScene(engine, foundPhysics);
    });

    // run the engine
    Runner.run(runner, engine);
  }

  createSphere(document.querySelector("#sphere-uxd"), projects.uxd);
  createSphere(document.querySelector("#sphere-uxr"), projects.dataViz);
  createSphere(document.querySelector("#sphere-viz"), projects.uxr);
});
