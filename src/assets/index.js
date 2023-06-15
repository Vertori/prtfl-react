import htmlLogo from "./techLogos/htmlLogo.svg";
import cssLogo from "./techLogos/cssLogo.svg";
import jsLogo from "./techLogos/jsLogo.svg";
import reactLogo from "./techLogos/reactLogo.svg";
import tailwindLogo from "./techLogos/tailwindLogo.svg";
import firebaseLogo from "./techLogos/firebaseLogo.svg";
import styledcomponentsLogo from "./techLogos/styledcomponentsLogo.svg";
import framermotionLogo from "./techLogos/framermotionLogo.svg";
import githubLogo from "./techLogos/githubLogo.svg";
import gitLogo from "./techLogos/gitLogo.svg";
import typescriptLogo from "./techLogos/typescriptLogo.svg";
import reduxLogo from "./techLogos/reduxLogo.svg";
import netflix1 from "./websites/netflix1.webp";
import netflix2 from "./websites/netflix2.webp";
import netflix3 from "./websites/netflix3.webp";
import ecommerce1 from "./websites/ecommerce1.webp";
import ecommerce2 from "./websites/ecommerce2.webp";
import ecommerce3 from "./websites/ecommerce3.webp";
import yt1 from "./websites/yt1.webp";
import yt3 from "./websites/yt3.webp";
import tesla1 from "./websites/tesla1.webp";
import tesla2 from "./websites/tesla2.webp";

const techList = [
  {
    id: 1,
    name: "HTML",
    image: htmlLogo,
  },
  {
    id: 2,
    name: "CSS",
    image: cssLogo,
  },
  {
    id: 3,
    name: "JavaScript",
    image: jsLogo,
  },
  {
    id: 4,
    name: "React JS",
    image: reactLogo,
  },
  {
    id: 5,
    name: "Tailwind CSS",
    image: tailwindLogo,
  },
  {
    id: 6,
    name: "Styled Components",
    image: styledcomponentsLogo,
  },
  {
    id: 7,
    name: "Firebase",
    image: firebaseLogo,
  },
  {
    id: 8,
    name: "Framer Motion",
    image: framermotionLogo,
  },
  {
    id: 9,
    name: "Git",
    image: gitLogo,
  },
  {
    id: 10,
    name: "GitHub",
    image: githubLogo,
  },
];

const currentlyLearning = [
  {
    id: 1,
    name: "Typescript",
    image: typescriptLogo,
  },
  {
    id: 2,
    name: "Redux",
    image: reduxLogo,
  },
];

const projectsList = [
  {
    id: 1,
    name: "Netflix Clone",
    description:
      "Netlix Clone created by fetching data from TMDb API, fully styled using Tailwind CSS. Thanks to Firebase, the website allows signing in, signing up, saving movies for signed in users and deleting them from saved list. Account page is only available to signed in users, which is provided by protected route. ",
    images: [netflix1, netflix2, netflix3],
    tags: [
      "React",
      "Tailwind CSS",
      "API (Axios)",
      "Firebase",
      "React Router",
      "Swiper",
    ],
    liveLink: "https://netflix-clone-react-rf.netlify.app/",
    codeLink: "https://github.com/Vertori/ntflx-cln-react",
  },
  {
    id: 2,
    name: "E-commerce website",
    description:
      "Online store website created by fetching data from Fake Store API, fully styled using Tailwind CSS. The website allows you to add items to the cart and fully manipulate cart content. The shopping cart dynamically updates the number of items in it and their total value. Each product has its own dynamically generated page.",
    images: [ecommerce1, ecommerce2, ecommerce3],
    tags: ["React", "Tailwind CSS", "API (Axios)", "React Router", "Swiper"],
    liveLink: "https://ecmrc-react-rf.netlify.app/",
    codeLink: "https://github.com/Vertori/e-cmrc-react",
  },
  {
    id: 3,
    name: "YouTube Clone",
    description:
      "Website created by fetching data from API, fully styled using Tailwind CSS. It allows you to search for movies and channels, to watch movies and explore channels content. Each movie includes its own dynamically generated page that contains information about the movie and displays other related movies.",
    images: [yt1, yt3],
    tags: [
      "React",
      "Tailwind CSS",
      "API (Axios)",
      "React Router",
      "React Player",
    ],
    liveLink: "https://yt-clone-react-rf.netlify.app/",
    codeLink: "https://github.com/Vertori/yt-cln-react",
  },
  {
    id: 4,
    name: "Tesla Clone",
    description:
      "Tesla Clone website created using Styled Components. This is a simple page that, using a single component that accepts props, generates sections for each brand model. Sections are animated using React Awesome Reveal, and scrolling the mouse causes the website to jump to the next sections.",
    images: [tesla1, tesla2],
    tags: [
      "React",
      "Styled Components",
      "React Router",
      "React Awesome Reveal",
    ],
    liveLink: "https://tesla-clone-react-rf.netlify.app/",
    codeLink: "https://github.com/Vertori/tsl-cln-react",
  },
];

export { techList, currentlyLearning, projectsList };
