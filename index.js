const projects = [
  {
    projectName: "Gun study",
    description: "",
    projectDuration: "",
    importance: 20,
  },
  {
    projectName: "PHI",
    description: "",
    projectDuration: "",
    importance: 30,
  },
  {
    projectName: "Joulea",
    description: "",
    projectDuration: "",
    importance: 35,
  },
  {
    projectName: "Dhyana",
    description: "",
    projectDuration: "",
    importance: 50,
  },
  {
    projectName: "Weather",
    description: "",
    projectDuration: "",
    importance: 40,
  },
  {
    projectName: "UIPrin. data",
    description: "",
    projectDuration: "",
    importance: 20,
  },
  {
    projectName: "Tableau",
    description: "",
    projectDuration: "",
    importance: 15,
  },
  {
    projectName: "dataviz scrolly",
    description: "",
    projectDuration: "",
    importance: 30,
  },
];

// Reference: https://codepen.io/Zajno/pen/NWOLdOm
window.addEventListener("load", async function () {
  async function createSphere(canvasSphereWrapp) {
    let sW = canvasSphereWrapp.offsetWidth;

    let Engine = Matter.Engine,
      Render = Matter.Render,
      Runner = Matter.Runner,
      Bodies = Matter.Bodies,
      Composite = Matter.Composite,
      World = Matter.World,
      Mouse = Matter.Mouse,
      MouseConstraint = Matter.MouseConstraint;

    // create an engine
    let engine = Engine.create();

    // create a renderer
    let render = Render.create({
      element: canvasSphereWrapp,
      engine: engine,
      options: {
        isSensor: true,
        width: canvasSphereWrapp.offsetWidth,
        height: canvasSphereWrapp.offsetHeight,
        background: "transparent",
        wireframes: false,
      },
    });

    const stack = projects.map((proj) =>
      Bodies.circle(sW / 2, sW / 2, sW / 15, {
        restitution: 0.5,
        render: {
          fillStyle: "#FFFFFF40",
          strokeStyle: "white",
          lineWidth: 4,
        },
      })
    );

    Composite.add(engine.world, stack);

    // add mouse control
    let mouse = Mouse.create(render.canvas),
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
    let runner = Runner.create();

    // run the engine
    Runner.run(runner, engine);
  }

  createSphere(document.querySelector("#sphere-uxd"));
  createSphere(document.querySelector("#sphere-uxr"));
  createSphere(document.querySelector("#sphere-viz"));
});
