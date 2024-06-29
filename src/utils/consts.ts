export const ROUTES = ["Home", "Projects", "Contact"];

const prysm = {
  link: "https://demo.prysmxr.com/",
  href: "/projects#prysm",
  id: "prysm",
  label: "Prysm Demo",
  description: "A ReactXR/Three.js/TypeScript virtual reality experience",
  image: "/images/prysm.png",
  github: undefined
};
const agendaKeeper = {
  link: "https://app.agendakeeper.com/",
  href: "/projects#agenda-keeper",
  id: "agenda-keeper",
  label: "Agenda Keeper",
  description:
    "A TypeScript/React/Next agenda keeper for your virtual meetings",
  image: "/images/agenda-keeper.png",
  github: undefined
};
const tinySun = {
  link: "https://www.tinysunstudio.com",
  href: "/projects#tiny-sun",
  id: "tiny-sun",
  label: "Tiny Sun",
  description: "A React/Next.js/TypeScript studio website",
  image: "/images/tinySun.png",
  github: 'https://github.com/leerobertdyer/tiny_sun'
};
const wabs = {
  link: "https://www.writeabadsong.com",
  href: "/projects#wabs",
  id: "wabs",
  label: "Write A Bad Song",
  description: "A React/Next.js/TypeScript songwriting and motivational app",
  image: "/images/wabs.png",
    github: 'https://github.com/leerobertdyer/wabsv2'
};
const wifeIsland = {
  link: "https://www.wifeislandduo.com",
  href: "/projects#wife-island",
  id: "wife-island",
  label: "Wife Island",
  description:
    "A React/Next.js/TypeScript band website that utilizes Google Calendar API to display upcoming shows",
  image: "/images/wifeIsland.png",
  github: 'https://github.com/leerobertdyer/wifeisland'
};
const ashevenue = {
  link: "https://www.ashevenue.com",
  href: "/projects#ashevenue",
  id: "ashevenue",
  label: "Ashevenue",
  description:
    "An automated Flask app that uses Beautiful Soup and Playwright in a Docker container to scrape and display upcoming shows in Asheville, NC.",
  image: "/images/ashevenue.png",
  github: 'https://github.com/leerobertdyer/vavl'
};
const pong = {
  link: "https://pongpong.glitch.me/",
  href: "/projects#pong",
  id: "pong",
  label: "Pong Pong",
  description:
    "A multiplayer pong game built with React, Node/Express, and Socket.io",
  image: "/images/pong.png",
  github: 'https://github.com/leerobertdyer/PongPong'

};
const auntVicki = {
  link: "https://www.auntvicki.rocks",
  href: "/projects#aunt-vicki",
  label: "Aunt Vicki",
  id: "aunt-vicki",
  description:
    "A React/Next.js/TypeScript band website that utilizes Google Calendar API to display upcoming shows",
  image: "/images/auntVicki.png",
  github: 'https://github.com/leerobertdyer/auntvicki'
};

export const allProjects = [
  agendaKeeper,
  prysm,
  tinySun,
  wabs,
  ashevenue,
  auntVicki,
  wifeIsland,
  pong,
];

export const SKILLS = [
  {
    name: "React",
    description: "This portfolio site was built in React!",
    links: [agendaKeeper, prysm, tinySun, wabs],
  },
  {
    name: "Next.js",
    description:
      "This portfolio site was built utilizing NEXT.js for both front and backend!",
    links: [agendaKeeper, prysm, tinySun, wifeIsland],
  },
  {
    name: "Node.js",
    description:
      "This portfolio site uses nodemailer in the backend to handle the contact form.",
    links: [agendaKeeper, prysm, tinySun, wabs, pong],
  },
  {
    name: "SQL",
    description:
      "I have experience with Knex, SQLAlchemy, as well as writing custom SQL functions.",
    links: [agendaKeeper, wabs, ashevenue, tinySun],
  },
  {
    name: "HTML/CSS",
    description:
      "I have experience with Tailwind, but am also comfortable with vanilla CSS.",
    links: allProjects,
  },
  {
    name: "Python",
    description: "I am most comfortable using python with Flask.",
    links: [{ href: "/projects#ashevenue", label: "Ashevenue" }],
  },
  {
    name: "TypeScript",
    description: "This portfolio site was built in TypeScript!",
    links: [agendaKeeper, prysm, tinySun, wabs, wifeIsland],
  },
  {
    name: "Three.js",
    description:
      "I have a firm grasp on the key concepts: Scene, Camera, Renderer, Mesh, Geometry, Material, Lighting, Textures.",
    links: [prysm],
  },
  {
    name: "ReactXR",
    description:
      "I have a solid understanding of the ReactXR library. Including basic setup for VR and AR.",
    links: [prysm],
  },
  {
    name: "Vitest",
    description:
      "I have experience crafting and editing unit tests with Vitest and React Testing Library.",
    links: [agendaKeeper],
  },
  {
    name: "Express",
    description:
      "I have experience with Express, and have worked with several RESTful APIs.",
    links: [pong],
  },
  {
    name: "Docker",
    description: "I have used Docker to containerize and deploy.",
    links: [ashevenue],
  },
  {
    name: "Socket",
    description:
      "I have experience with socket.io setting up instant messaging and live notifications.",
    links: [pong, wabs, prysm],
  },
  {
    name: "Playwright",
    description:
      "I have experience with Playwright and Beautiful Soup for web scraping.",
    links: [ashevenue],
  },
  {
    name: "Firebase",
    description:
      "I have experience with Firebase and Supabase for authentication and database management.",
    links: [agendaKeeper, wifeIsland, prysm, tinySun, wabs, ashevenue],
  },
  {
    name: "APIs",
    description:
      "I have experience with several 3rd party APIs including Dropbox, Google Calendar, and PayPal.",
    links: [agendaKeeper, wifeIsland, prysm, tinySun, wabs, ashevenue],
  },
  {
    name: "Git/GitHub",
    description:
      "I have extensive experience working with source control including interactive rebasing as well as traditional merging.",
    links: allProjects,
  },
];
