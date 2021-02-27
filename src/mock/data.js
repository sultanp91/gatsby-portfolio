import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Sultan | Wev Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my portfolio' // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: '',
  paragraphOne: 'I am a self-taught web developer from London.',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'cv-app.png',
    title: 'React CV Generator',
    info: '',
    info2: '',
    url: 'https://sultanp91.github.io/cv-project/',
    repo: 'https://github.com/sultanp91/cv-project', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'to-do-list.png',
    title: 'To Do List',
    info: 'To Do List made with vanilla JavaScript. Users are are able to create projects and then create t',
    info2: '',
    url: 'https://sultanp91.github.io/to-do-list/',
    repo: 'https://github.com/sultanp91/to-do-list', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'weather-app.png',
    title: 'Weather App',
    info: 'Weather App',
    info2: '',
    url: 'https://sultanp91.github.io/weather-app/',
    repo: 'https://github.com/sultanp91/weather-app', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'sultanp@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/sultan-alom-parbes-797051159/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/sultanp91',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
