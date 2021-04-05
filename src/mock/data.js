import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Sultan | Front End Developer', // e.g: 'Name | Developer'
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
  img: 'profile.jpg',
  paragraphOne: "I am a front end developer from London. I am currently working through the full stack JavaScript course at The Odin Project, an open source project based curriculum. I enjoy taking complex problems, breaking them down into smaller problems and engineering understandable and performant solutions",
  paragraphTwo: 'I have built mutiple projects with HTML, CSS and JavaScript - each project developing my understandig of JavaScript as a language and how to leverage it to create interactive experiences. I am familiar with modern ES6 syntax, confident working with async code and have a solid understanding of JS fundamentals such as scope and the prototype chain.',
  paragraphThree: 'I have built several applications using React using both Class and functional components and I have developed strong passion for it as I am in awe of its ability to create dynamic and responsive websites with ease. I am proficient with Git and modern tooling such as WebPack, NPM, ESLint and Prettier. My goal is to become a full stack developer and each day I learn, code and build towards that goal.',
  paragraphFour: 'I am currently looking for opportunities in web development. If you wish to know more about me please do not hesitate to ask.',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'shopping-cart.png',
    title: 'Next Gen Store',
    info: 'Front end shopping cart built with React functional components and React hooks. I used React Router to display content across mutiple pages, I also used Context and useReducer to access and manipulate state across multiple component layers without excessive prop drilling, enabling predictable and bug-free changes to application state.',
    info2: 'Technologies used: React, React Router, JavaScript, SASS',
    url: 'https://sultanp91.github.io/shopping-cart/',
    repo: 'https://github.com/sultanp91/shopping-cart', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'cv-app.png',
    title: 'React CV Generator',
    info: 'CV Generator app built with class components. Users are able to add in their personal information, they can add in education and work history entries which can be edited and deleted. This was built with class components so that I could have a broader understanding of React as a library and enable me to work with legacy codebases built with class components',
    info2: 'Technologies used: React, JavaScript, CSS',
    url: 'https://sultanp91.github.io/cv-project/',
    repo: 'https://github.com/sultanp91/cv-project', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'memory.jpg',
    title: 'Memory Card',
    info: 'Memory card game built with React functional components making use of useState and useEffect hooks to enable game logic. Try to click all 24 images without clicking on an image twice!',
    info2: 'Technologies used: React, JavaScript, CSS',
    url: 'https://sultanp91.github.io/memory-card/',
    repo: 'https://github.com/sultanp91/memory-card', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'to-do-list.png',
    title: 'To Do List',
    info: "To Do List made with vanilla JavaScript. Users are are able to create projects and then create tasks within them. Tasks can be edited and deleted. Users are also able to find tasks due on that date and also sort through tasks by priority. Dates are formatted using the date-fns package. This was one of the most difficult projects I've done, it was the first time ",
    info2: 'Technologies used: JavaScript, HTML, SASS, WebPack',
    url: 'https://sultanp91.github.io/to-do-list/',
    repo: 'https://github.com/sultanp91/to-do-list', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'weather-app.png',
    title: 'Weather App',
    info: `Weather App which uses the OpenWeather API to retrieve weather data. Users are also able to retrieve weather data by using their current location using the browser's GeoLocation API, which I then converted to a valid location input through the Location IQ API which is then fed back to the OpenWeather API.` ,
    info2: 'Technologies used: HTML, JavaScript, SASS',
    url: 'https://sultanp91.github.io/weather-app/',
    repo: 'https://github.com/sultanp91/weather-app', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'restaurant-page.jpg',
    title: 'Restaurant Page',
    info: 'Landing page for a restaurant. All page content is dynamically generated by JavaScript.',
    info2: 'Technologies used: HTML, CSS, JavaScript',
    url: 'https://sultanp91.github.io/restaurant-page/',
    repo: 'https://github.com/sultanp91/restaurant-page', // if no repo, the button will not show up
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
