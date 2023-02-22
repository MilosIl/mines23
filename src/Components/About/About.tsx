import './about.css'
import Card from '../Card/Card';

import html from '../../assets/mdi_html.svg';
import css from '../../assets/mdi_css.svg';
import javascript from '../../assets/mdi_javascript.svg';
import typescript from '../../assets/mdi_typescript.svg';
import react from '../../assets/mdi_react.svg';
import next from '../../assets/mdi_nextjs.svg';
import tailwind from '../../assets/mdi_tailwind.svg';
import mui from '../../assets/mdi_mui.svg';
import bootstrap from '../../assets/mdi_bootstrap.svg';
import mongodb from '../../assets/mdi_mongodb.svg';
import firebase from '../../assets/mdi_firebase.svg';
import git from '../../assets/mdi_git.svg';
import figma from '../../assets/mdi_figma.svg';

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
        portfolio to you. I specialize in creating good visually pleasing and
        user-friendly websites and web applications using a variety of
        technologies and tools.
      </p>
      <p>
        I am a highly motivated, efficient and detail-oriented. Through my
        journey as a self-taught developer, I have gained a lot of experience
        and understanding of client needs. I'm dedicated to the needs of the
        clients, how I can solve the problem in the best way. I have a good
        understanding of the needs of web accessibility and responsive design
      </p>
      <p>
        I possess a strong understanding of web development technologies such as
        HTML, CSS, JavaScript and TypeScript and using library like React, I am
        well-versed in front-end frameworks like NextJS. I have experience
        working with CSS and frameworks like Tailwind CSS, Material-UI and
        Bootstrap. I have also proficient in design tools such as Figma. And
        proficient in Git for version control and updating code.
      </p>
      <p>
        Path as a self-taught front-end developer, it have their the challenges
        and rewards of self-learning. So I am always looking for ways to improve
        my skills and stay up-to-date with the latest web development
        technologies and trends.
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
