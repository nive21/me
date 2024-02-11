var red = "#e53429";
var yellow = "#F7B028";
var pink = "#E097C2";
var bg = "#008000";
var white = "#fff";

const shape1 = "15,0 25,2 36,17 11,34 6,34 0,20 5,8";
const shape2 = "20,8 60,0 93,5 126,52 104,102 62,137 3,102 0,70";
const shape3 = "14,13 41,0 65,18 84,41 88,91 56,125 24,125 0,91 0,56";
const shape4 = "24,0 45,22 35,60 12,54 1,35 0,20";
const shape5 = "19,0 34,0 44,15 44,51 20,53 0,34";
const shape6 = "12,0 29,0 51,9 64,24 64,42 54,59 39,73 7,73 1,59 0,38";
const shape7 =
  "33,0 95,0 116,14 138,39 154,74 170,114 166,148 125,174 95,190 65,205 18,171 0,125 0,45";

// module aliases
var Engine = Matter.Engine,
  Render = Matter.Render,
  World = Matter.World,
  Bodies = Matter.Bodies,
  MouseConstraint = Matter.MouseConstraint,
  Mouse = Matter.Mouse;

// create an engine
var engine = Engine.create(),
  world = engine.world;

const boundaryThickness = 10;
const width = 400;
const height = 300;

const rendererOptions = {
  width: width,
  height: height,
  wireframes: false,
  background: white,
};

// create a renderer
var render = Render.create({
  element: document.getElementById("container"),
  engine: engine,
  options: rendererOptions,
});

// Options for the boundaries
const boundaryOptions = {
  isStatic: true,
  render: { fillStyle: white },
};

// Create the boundaries
const boundaries = [
  // Horizontal - top
  Bodies.rectangle(width / 2, 0, width, boundaryThickness, boundaryOptions),
  // Horizontal - bottom
  Bodies.rectangle(
    width / 2,
    height,
    width,
    boundaryThickness,
    boundaryOptions
  ),
  //   Vertical - right
  Bodies.rectangle(
    width,
    height / 2,
    boundaryThickness,
    height,
    boundaryOptions
  ),
  //   Vertical -left
  Bodies.rectangle(0, height / 2, boundaryThickness, height, boundaryOptions),
];

const bodyOptions = (color) => ({
  frictionAir: 0,
  render: { fillStyle: color },
  restitution: 0.3,
});

// Create the bodies
// x, y, radius
const boxes = [Bodies.circle(60, 60, 30, bodyOptions("#FF0000"))];
// x, y, sides, radius
// var box2 = Bodies.polygon(148, 254, 5, 40, bodyOptions("#00FF00"));
// // x, y, width, height
// var box3 = Bodies.rectangle(44, 251, 60, 60, bodyOptions("#0000FF"));

// add all of the bodies to the world
World.add(engine.world, [...boxes, ...boundaries]);

// run the engine
Engine.run(engine);

// run the renderer
Render.run(render);

// add mouse control
var mouse = Mouse.create(render.canvas),
  mouseConstraint = MouseConstraint.create(engine, {
    mouse: mouse,
    constraint: {
      stiffness: 0.2,
      render: {
        visible: false,
      },
    },
  });

World.add(world, mouseConstraint);

// keep the mouse in sync with rendering
render.mouse = mouse;
