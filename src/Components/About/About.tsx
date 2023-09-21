import "./about.css";
import Card from "../Card/Card";

import html from "../../assets/mdi_html.svg";
import css from "../../assets/mdi_css.svg";
import javascript from "../../assets/mdi_javascript.svg";
import typescript from "../../assets/mdi_typescript.svg";
import react from "../../assets/mdi_react.svg";
import next from "../../assets/mdi_nextjs.svg";
import tailwind from "../../assets/mdi_tailwind.svg";
import mui from "../../assets/mdi_mui.svg";
import bootstrap from "../../assets/mdi_bootstrap.svg";
import mongodb from "../../assets/mdi_mongodb.svg";
import firebase from "../../assets/mdi_firebase.svg";
import git from "../../assets/mdi_git.svg";
import figma from "../../assets/mdi_figma.svg";

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

const About: React.FC = () => {
  return (
    <section className="about-section" id="about">
      <h2>About me</h2>
      <div className="about-text">
        <p>
          As a self-taught front-end web developer, I am happy to present my
          portfolio to you with some of my work. I am a highly motivated,
          efficient and detail-oriented. Dedicated to the needs of the clients,
          how I can solve the problem in the best way. I have a good
          understanding of the needs for web accessibility and responsive
          design. The path as a self-taught front-end developer has its own
          challenges and self-learning rewards, so I'm always looking for ways
          to improve my skills and keep up with the latest web development
          technologies and trends.
        </p>
        <p>
          Services that I provide are building website and web applications for
          all size business. Personal blogs or single page applications with
          responsivnes for all screen sizes. Maintance of website that you have
        </p>
      </div>

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
