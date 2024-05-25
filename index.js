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
    title: "Social Balance through App Design",
    keyText: `We developed high-fidelity functional prototypes and tested them.`,
    icon: "./assets/projects/CIRCLE.svg",
    highlightedIcon: "./assets/projects-highlighted/CIRCLE.svg",
    imageAlt: "Description 2",
    problemText: `Our aim was to develop a solution to help introverts maintain a
    balance between social and personal well-being, as part of our
    class on Personal Health Informatics.`,
    resultsText: `We developed high-fidelity functional prototypes on Figma and
    conducted user testing. The feedback we received highlighted
    discrepancies in users' mental models, and we devised solutions to
    bridge these gaps.`,
  },
  [projectNames.JOU]: {
    title: "Designing for Efficiency",
    keyText: "I led end-to-end B2B dashboard projects.",
    icon: "./assets/projects/JOU.svg",
    highlightedIcon: "./assets/projects-highlighted/JOU.svg",
    imageAlt: "Description 2",
    problemText: `This is an ongoing project where I am leading the UX initiatives for a
          climate-focused startup. Here,  I lead full-stack projects from client interviews to dashboard designs and the implementation of those designs.`,
    resultsText: null,
  },
  [projectNames.DHY]: {
    title: "Expanding the Market Reach of Dhyana",
    keyText: "Our ring sales tripled times in one year.",
    icon: "./assets/projects/DHY.svg",
    highlightedIcon: "./assets/projects-highlighted/DHY.svg",
    imageAlt: "Description 1",
    problemText:
      "Dhyana is a smart ring that leverages Heart Rate Variability (HRV) to evaluate the effectiveness of meditation sessions. Despite receiving positive feedback from users, the product's reach was predominantly among early adopters. Our objective was to boost sales by targeting a broader market.",
    resultsText: `The user base surged from fewer than 500 to over 50,000 and sales tripled within a
    year. In addition, the website redesign led to approximately 50% reduction in the
    bounce rate.
    `,
  },
  [projectNames.UI]: {
    title: "A multitouch interactive tool",
    keyText: `Developed using JS,
    the tool enables users to interact via pointers`,
    icon: "./assets/projects/UI.svg",
    highlightedIcon: "./assets/projects-highlighted/UI.svg",
    imageAlt: "Description 2",
    problemText: `In this project, we aimed to introduce a tool for exploring
    multivariate data, capitalizing on the increased availability and
    affordability of touch-based systems.`,
    resultsText: `We designed and implemented a multitouch interactive
    data-visualization tool targeted at middle-school students to
    facilitate data exploration practice. The tool enables users to interact via pointers, allowing for the use of
    fingers (touch) or a stylus interchangeably. Most functions are
    also accessible through alternative mouse clicks or mouse wheel
    interactions.`,
  },
  [projectNames.TABLEAU]: {
    title: "Tracking sentiment shifts",
    keyText: "I achieved the third place at the global competition.",
    icon: "./assets/projects/TABLEAU.svg",
    highlightedIcon: "./assets/projects-highlighted/TABLEAU.svg",
    imageAlt: "Description 2",
    problemText: `The Tableau 2021 Student Iron Viz competition challenged
    participants to tell a story using music data. The entries were
    evaluated based on creativity, analysis, beauty/design, and
    adherence to best practices.`,
    resultsText: `My data visualization secured third place among global entries.
    Utilizing Spotify metrics, Billboard songs, lyric keywords, and
    the NRCLex library, I crafted a dashboard that illustrated the
    shifting sentiments of people over time through their preferences
    in music.`,
    website: "https://nive21.github.io/data-driven-story/",
  },
  [projectNames.SCROLLY]: {
    title: "Data-driven scrollytelling",
    keyText: `The project was recognized as a top project in the class
    that year.`,
    icon: "./assets/projects/SCROLLY.svg",
    highlightedIcon: "./assets/projects-highlighted/SCROLLY.svg",
    imageAlt: "Description 2",
    problemText: `The challenge was to create a scrollytelling website that
    presented data on police violence in the US for my graduate class,
    'Principles of Data Visualization'.`,
    resultsText: `Utilizing tools like Tableau, AfterEffects, and HTML/CSS, we
    developed a website that narrated a story through insights
    revealed and charts animated upon scrolling. The site also
    featured an interactive data exploration tool, enabling users to
    delve into the data and discover their own insights.`,
  },
  [projectNames.REDDIT]: {
    title: "Gun discourse on Reddit",
    keyText: `The paper has been submitted to the CSCW 2024 conference.`,
    icon: "./assets/projects/REDDIT.svg",
    highlightedIcon: "./assets/projects-highlighted/REDDIT.svg",
    imageAlt: "Description 2",
    problemText: `As part of Dr. Amy Bruckman's team, I delved into the discourse
    surrounding guns on Reddit. Our goal was to understand the
    motivations and impact of these online conversations, and identify
    ways to promote to constructive intergroup interactions.`,
    resultsText: `Our research paper was submitted to the Computer-Supported
    Cooperative Work & Social Computing (CSCW) 2024 conference and is
    currently undergoing review.`,
  },
  [projectNames.SPEAKER]: {
    title: "Audio Stories to Remember the Departed",
    keyText: `Our exploration led us to the potential of using audio stories to
    memorialize the departed`,
    icon: "./assets/projects/SPEAKER.svg",
    highlightedIcon: "./assets/projects-highlighted/SPEAKER.svg",
    imageAlt: "Description 2",
    problemText: `For our capstone project in the graduate Human-Computer
    Interaction class, our objective was to explore the problem and
    solution space around the theme ‘Remembering the Departed’. We
    gathered survey data and iterated on prototypes, evaluated them
    against a set of usability criteria, selected the most promising
    prototype, and conducted a Wizard-of-Oz test.`,
    resultsText: `Our exploration led us to the potential of using audio stories to
    memorialize the departed. The Wizard-of-Oz prototype testing
    resulted in several design implications.`,
  },
  [projectNames.FOOD]: {
    title: "Designing Food Experiences",
    keyText: `Based on insights gained from the five tasks,
    I formulated three "how-might-we" insights.`,
    icon: "./assets/projects/FOOD.svg",
    highlightedIcon: "./assets/projects-highlighted/FOOD.svg",
    imageAlt: "Description 2",
    problemText: `As part of a school project for the Qualitative Research Methods
    course, I conducted a participatory design study with three
    classmates acting as the participants. My aim was to explore how
    we could design food experiences tailored to students on campus. I
    had 30 minutes to complete the session.`,
    resultsText: `Based on insights gained from the five tasks centered around food,
    I formulated three "how-might-we" insights.`,
  },
};

// Function to create a project section
function createProjectSection(project, projectName) {
  const section = document.createElement("div");
  section.className = "section";

  const card = document.createElement("div");
  card.className = "card";

  const content = document.createElement("div");
  content.className = "content-container";

  const topContainer = document.createElement("div");
  topContainer.className = "top-container";

  const titleContainer = document.createElement("div");
  titleContainer.className = "title-container";

  const img = document.createElement("img");
  img.src = project.highlightedIcon;
  img.alt = project.imageAlt;

  const title = document.createElement("h1");
  title.textContent = project?.title ?? "";

  const contextContainer = document.createElement("div");
  contextContainer.className = "context-container";

  const problemHeading = document.createElement("h3");
  problemHeading.textContent = "Context";

  const problemText = document.createElement("p");
  problemText.textContent = project.problemText;

  const keyText = document.createElement("h2");
  keyText.textContent = project?.keyText ?? "";

  const projectPage = document.createElement("button");
  projectPage.className = "page-button";
  projectPage.textContent = "READ MORE";
  projectPage.addEventListener("click", () => {
    window.open(projectPages[projectName], "_blank");
  });

  card.appendChild(content);
  content.appendChild(topContainer);
  topContainer.appendChild(titleContainer);
  titleContainer.appendChild(img);
  titleContainer.appendChild(title);
  topContainer.appendChild(contextContainer);
  contextContainer.appendChild(problemHeading);
  contextContainer.appendChild(problemText);
  contextContainer.appendChild(keyText);
  content.appendChild(projectPage);

  section.appendChild(card);

  return section;
}

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
      const projectIndex = Object.values(cardOpened).indexOf(
        event.source.body.label
      );
      const yPosition = (projectIndex + 1) * window.innerHeight;
      console.log("y ", yPosition);
      window.scrollTo(0, yPosition);
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
    if (pageScrolled) {
      for (const [index, item] of stack.entries()) {
        if (item.label === currentlyOpenCard) {
          item.render.sprite.texture = data?.[item.label]?.highlightedIcon;
        } else {
          item.render.sprite.texture = data?.[item.label]?.icon;
        }
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

  Object.values(cardOpened).forEach((projectName) => {
    const projectSection = createProjectSection(data[projectName], projectName);
    projectsList.appendChild(projectSection);
  });
});

const arrowButton = document.getElementById("arrow");

arrowButton.addEventListener("click", function (_) {
  window.scrollTo(0, window.scrollY + window.innerHeight);
});

window.addEventListener(
  "scroll",
  function (_) {
    const cardNum = this.scrollY / this.window.innerHeight;
    const cardIndex = Math.floor(cardNum);

    if (currentlyOpenCard !== cardOpened[cardIndex]) {
      pageScrolled = true;
      currentlyOpenCard = cardOpened[cardIndex];

      if (cardIndex === totalProjects) {
        arrowButton.className = "hide-arrow";
      } else {
        arrowButton.classList.remove("hide-arrow");
      }
    } else {
      pageScrolled = false;
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
