import Card from "./Card";

import html from "../assets/mdi_html.svg";
import css from "../assets/mdi_css.svg";
import javascript from "../assets/mdi_javascript.svg";
import typescript from "../assets/mdi_typescript.svg";
import react from "../assets/mdi_react.svg";
import next from "../assets/mdi_nextjs.svg";
import tailwind from "../assets/mdi_tailwind.svg";
import mui from "../assets/mdi_mui.svg";
import bootstrap from "../assets/mdi_bootstrap.svg";
import mongodb from "../assets/mdi_mongodb.svg";
import firebase from "../assets/mdi_firebase.svg";
import git from "../assets/mdi_git.svg";
import figma from "../assets/mdi_figma.svg";

const iconsGroup = [
  html,
  css,
  javascript,
  typescript,
  react,
  next,
  tailwind,
  mui,
  bootstrap,
  mongodb,
  firebase,
  git,
  figma,
];

const About = () => {
  return (
    <section className="about-section" id="about">
      <h2>About me</h2>
      <p>
       As a self-taught front-end developer, I am excited to present my
        portfolio to you. My name is Miloš, and I become skilled in the design,
        development and deployment of visually pleasing and user-friendly
        websites and web applications. 
        In this portfolio, you will find examples of my work, showcasing my
        capabilities and skills as a self-taught web developer. I am eager
        to take on new challenges and continue to improve my skills and 
        confident that I can deliver high-quality work.
        Throughout my journey as a self-taught developer, I have gained valuable
        experience in understanding user-centered design, web accessibility and
        responsive design. I am a strong collaborator and communicator, able to
        understand the needs of my clients and translate them into visually
        pleasing and functional websites. I have been passionate about web development for quite some time now and
        taught myself the skills needed to become a proficient front-end
        developer. I have a strong understanding of web development technologies
        such as HTML, CSS, JavaScript and various front-end frameworks like
        React and Nextjs. I'm also well-versed in design tools such as Figma.  I am a quick learner and always eager to improve my skills. I have a
        great attention to detail and dedicated to producing high-quality,
        scalable and efficient code. I'm always looking for ways to stay
        up-to-date with the latest web development technologies and trends.
      </p>

      <div className="card-container">
        <Card
          title="Team player"
          body="Looking for ways to improve myself and people around me."
        />
        <Card
          title="Devotion"
          body="Deadlines are important, otherwise job wouldn't be finished."
        />
        <Card
          title="Observation"
          body="Open for new projects and suggestions for improvement."
        />
      </div>
      <p className="icons-title">Web Technologies</p>
      <div className="icons-container">
        {iconsGroup.map((icon: string, index: number) => {
          return <img key={index} src={icon} alt={icon} />;
        })}
      </div>
    </section>
  );
};

export default About;
