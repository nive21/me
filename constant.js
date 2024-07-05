export const projectNames = {
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

export const projectPages = {
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

export const projectForces = {
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

export const projects = {
  uxd: [
    {
      projectName: projectNames.DHY,
      size: 45,
    },
    {
      projectName: projectNames.CIRCLE,
      size: 45,
    },
    {
      projectName: projectNames.JOU,
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

export const data = {
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
    tags: ["global competition"],
    keyText: "I achieved the third place at the global competition.",
    icon: "./assets/projects/TABLEAU.svg",
    sameSizeIcon: "./assets/projects-same-size/TABLEAU.svg",
    highlightedIcon: "./assets/projects-highlighted/TABLEAU.svg",
    imageAlt: "Description 2",
    problemText: `My third place entry to the Tableau 2021 Student Iron Viz competition to tell a story using music data.`,
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
