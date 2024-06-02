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
      size: 45,
    },
    {
      projectName: projectNames.JOU,
      size: 45,
    },
    {
      projectName: projectNames.DHY,
      size: 45,
    },
  ],
  dataViz: [
    {
      projectName: projectNames.UI,
      size: 35,
    },
    {
      projectName: projectNames.TABLEAU,
      size: 35,
    },
    {
      projectName: projectNames.SCROLLY,
      size: 35,
    },
  ],
  uxr: [
    {
      projectName: projectNames.REDDIT,
      size: 30,
    },
    {
      projectName: projectNames.SPEAKER,
      size: 30,
    },
    {
      projectName: projectNames.FOOD,
      size: 30,
    },
  ],
};

const cardOpened = {
  1: projectNames.DHY,
  2: projectNames.SCROLLY,
  3: projectNames.TABLEAU,
  4: projectNames.REDDIT,
  5: projectNames.SPEAKER,
  6: projectNames.CIRCLE,
  7: projectNames.FOOD,
  8: projectNames.UI,
  9: projectNames.JOU,
};

const totalProjects = Object.values(cardOpened)?.length;

let currentlyOpenCard = null;
let pageScrolled = false;

const data = {
  [projectNames.CIRCLE]: {
    title: "Achieving Social Balance",
    tags: ["Prototyping", "georgia tech"],
    keyText: `We developed high-fidelity functional prototypes and tested them.`,
    icon: "./assets/projects/CIRCLE.svg",
    sameSizeIcon: "./assets/projects-same-size/CIRCLE.svg",
    highlightedIcon: "./assets/projects-highlighted/CIRCLE.svg",
    imageAlt: "Description 2",
    problemText: `Our aim was to develop a solution to help introverts maintain a
    balance between social and personal well-being.`,
    resultsText: `We developed high-fidelity functional prototypes on Figma and
    conducted user testing. The feedback we received same-size
    discrepancies in users' mental models, and we devised solutions to
    bridge these gaps.`,
  },
  [projectNames.JOU]: {
    title: "Designing for Efficiency",
    tags: ["B2B climate tech", "highest engagemner rate YTD"],
    keyText: "I led end-to-end B2B dashboard projects.",
    icon: "./assets/projects/JOU.svg",
    sameSizeIcon: "./assets/projects-same-size/JOU.svg",
    highlightedIcon: "./assets/projects-highlighted/JOU.svg",
    imageAlt: "Description 2",
    problemText: `This is an ongoing project where I am leading the UX initiatives for a
          climate-focused startup.`,
    resultsText: null,
  },
  [projectNames.DHY]: {
    title: "Expanding the Market Reach",
    tags: ["B2C wearable tech", "3x sales"],
    keyText: "Our ring sales tripled times in one year.",
    icon: "./assets/projects/DHY.svg",
    sameSizeIcon: "./assets/projects-same-size/DHY.svg",
    highlightedIcon: "./assets/projects-highlighted/DHY.svg",
    imageAlt: "Description 1",
    problemText:
      "Our objective was to boost sales of our wearable by targeting a broader market.",
    resultsText: `The user base surged from fewer than 500 to over 50,000 and sales tripled within a
    year. In addition, the website redesign led to approximately 50% reduction in the
    bounce rate.
    `,
    mainImage: "./assets/images-on-pages/dhyana/cover.png",
  },
  [projectNames.UI]: {
    title: "A multitouch interactive tool",
    tags: ["dataviz", "georgia tech"],
    keyText: `Developed using JS,
    the tool enables users to interact via pointers`,
    icon: "./assets/projects/UI.svg",
    sameSizeIcon: "./assets/projects-same-size/UI.svg",
    highlightedIcon: "./assets/projects-highlighted/UI.svg",
    imageAlt: "Description 2",
    problemText: `In this project, we aimed to introduce a tool for exploring
    multivariate data.`,
    resultsText: `We designed and implemented a multitouch interactive
    data-visualization tool targeted at middle-school students to
    facilitate data exploration practice. The tool enables users to interact via pointers, allowing for the use of
    fingers (touch) or a stylus interchangeably. Most functions are
    also accessible through alternative mouse clicks or mouse wheel
    interactions.`,
  },
  [projectNames.TABLEAU]: {
    title: "Tracking sentiment shifts",
    tags: ["winning entry"],
    keyText: "I achieved the third place at the global competition.",
    icon: "./assets/projects/TABLEAU.svg",
    sameSizeIcon: "./assets/projects-same-size/TABLEAU.svg",
    highlightedIcon: "./assets/projects-highlighted/TABLEAU.svg",
    imageAlt: "Description 2",
    problemText: `My winning entry to the Tableau 2021 Student Iron Viz competition to tell a story using music data.`,
    resultsText: `My data visualization secured third place among global entries.
    Utilizing Spotify metrics, Billboard songs, lyric keywords, and
    the NRCLex library, I crafted a dashboard that illustrated the
    shifting sentiments of people over time through their preferences
    in music.`,
    website: "https://nive21.github.io/data-driven-story/",
    mainImage: "./assets/images-on-pages/music/ironviz-photo.png",
  },
  [projectNames.SCROLLY]: {
    title: "Data-driven scrollytelling",
    tags: ["a top class project"],
    keyText: `The project was recognized as a top project in the class
    that year.`,
    icon: "./assets/projects/SCROLLY.svg",
    sameSizeIcon: "./assets/projects-same-size/SCROLLY.svg",
    highlightedIcon: "./assets/projects-highlighted/SCROLLY.svg",
    imageAlt: "Description 2",
    problemText: `The challenge was to create a scrollytelling website that
    presented data on police violence in the US.`,
    resultsText: `Utilizing tools like Tableau, AfterEffects, and HTML/CSS, we
    developed a website that narrated a story through insights
    revealed and charts animated upon scrolling. The site also
    featured an interactive data exploration tool, enabling users to
    delve into the data and discover their own insights.`,
  },
  [projectNames.REDDIT]: {
    title: "Gun discourse on Reddit",
    tags: ["cscw 2024 submission"],
    keyText: `The paper has been submitted to the CSCW 2024 conference.`,
    icon: "./assets/projects/REDDIT.svg",
    sameSizeIcon: "./assets/projects-same-size/REDDIT.svg",
    highlightedIcon: "./assets/projects-highlighted/REDDIT.svg",
    imageAlt: "Description 2",
    problemText: `Our goal was to understand the
    motivations and impact of online conversations on guns.`,
    resultsText: `Our research paper was submitted to the Computer-Supported
    Cooperative Work & Social Computing (CSCW) 2024 conference and is
    currently undergoing review.`,
  },
  [projectNames.SPEAKER]: {
    title: "Immersive Audio Stories",
    tags: ["user testing", "georgia tech"],
    keyText: `Our exploration led us to the potential of using audio stories to
    memorialize the departed`,
    icon: "./assets/projects/SPEAKER.svg",
    sameSizeIcon: "./assets/projects-same-size/SPEAKER.svg",
    highlightedIcon: "./assets/projects-highlighted/SPEAKER.svg",
    imageAlt: "Description 2",
    problemText: `Our objective was to explore the problem and
    solution space around the theme ‘Remembering the Departed’.`,
    resultsText: `Our exploration led us to the potential of using audio stories to
    memorialize the departed. The Wizard-of-Oz prototype testing
    resulted in several design implications.`,
  },
  [projectNames.FOOD]: {
    title: "Designing Food Experiences",
    tags: ["participation study", "georgia tech"],
    keyText: `Based on insights gained from the five tasks,
    I formulated three "how-might-we" insights.`,
    icon: "./assets/projects/FOOD.svg",
    sameSizeIcon: "./assets/projects-same-size/FOOD.svg",
    highlightedIcon: "./assets/projects-highlighted/FOOD.svg",
    imageAlt: "Description 2",
    problemText: `My aim was to explore how
    we could design food experiences for students through a participation study.`,
    resultsText: `Based on insights gained from the five tasks centered around food,
    I formulated three "how-might-we" insights.`,
  },
};

// Function to create a project section
function createProjectSection(projectName, smallProject = true) {
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

  section.appendChild(createProjectSection(project1));
  section.appendChild(createProjectSection(project2));

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

        // TODO: get this to work
        // item.render.sprite.texture = data?.[item.label]?.highlightedIcon;
      }
    });

    if (!isHovering) {
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
    // Check the scroll condition
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
    }

    requestAnimationFrame(render);
  })();
}

// Reference: https://codepen.io/Zajno/pen/NWOLdOm
window.addEventListener("load", async function () {
  createSphere(document.querySelector("#sphere-uxd"), projects.uxd);
  createSphere(document.querySelector("#sphere-uxr"), projects.dataViz);
  createSphere(document.querySelector("#sphere-viz"), projects.uxr);

  // The project list container
  const projectsList = document.querySelector(".projects-list");

  projectsList.appendChild(createProjectSection(projectNames.DHY, false));
  projectsList.appendChild(
    createSideBySideProjects(projectNames.SCROLLY, projectNames.REDDIT)
  );
  projectsList.appendChild(createProjectSection(projectNames.TABLEAU, false));
  projectsList.appendChild(
    createSideBySideProjects(projectNames.CIRCLE, projectNames.SPEAKER)
  );
  projectsList.appendChild(
    createSideBySideProjects(projectNames.UI, projectNames.FOOD)
  );
});

const arrowButton = document.getElementById("arrow");

arrowButton.addEventListener("click", function (_) {
  window.scrollTo(0, window.scrollY + window.innerHeight);
});

window.addEventListener(
  "scroll",
  function (_) {
    // const cardNum = this.scrollY / this.window.innerHeight;
    // const cardIndex = Math.floor(cardNum);

    // if (currentlyOpenCard !== cardOpened[cardIndex]) {
    //   pageScrolled = true;
    //   currentlyOpenCard = cardOpened[cardIndex];

    //   if (cardIndex === totalProjects) {
    //     arrowButton.className = "hide-arrow";
    //   } else {
    //     arrowButton.classList.remove("hide-arrow");
    //   }
    // } else {
    //   pageScrolled = false;
    // }
    if (this.scrollY > 50) {
      arrowButton.className = "hide-arrow";
    } else {
      arrowButton.classList.remove("hide-arrow");
    }
  },
  false
);

// JavaScript to open the modal
function openModal() {
  document.getElementById("modalOverlay").style.display = "block";
}

// JavaScript to close the modal
function closeModal() {
  document.getElementById("modalOverlay").style.display = "none";
}
