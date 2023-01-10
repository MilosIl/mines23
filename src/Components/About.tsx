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

const iconsGroup=[html,css,javascript,typescript,react,next,tailwind,mui,bootstrap,mongodb,firebase,git,figma]

const About = () => {
  return (
    <section className="about-section" id="about">
      <h2>About me</h2>

      <p>Im a self taught programmer with determination to learn more.</p>
      
      <p>
        Web development is one of my passions, that can give you satisfaction
        and joy while working on a new project or just learning to becoming a
        full stack developer
      </p>

      <p>
        One of the reasons i like design is concept of beauty on a first look.
        To make things that are efficient as user would come back and use it
        again.
      </p>

      <p>
        Self thought developer, with passion for new technologies. And ready to
        make a great product from your idea.
      </p>

      <p>
        As developer, I love solving new puzzles and questions that can be
        thought as puzzle finished
      </p>

      <p>
        Problem solver, I have personal way of handling a problem.. First part
        is to make it into small portions and to have a clear understanding of
        what is that problem and how it should be fixed
      </p>

      <p>
        Every developer dream is that hes product is used. That is going to make
        a change in (....)
      </p>

      <p>to challenge myself and will to learn more</p>
      
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
        {/* naslov treba da se promeni */}
        <p>Title of technologies what i use</p>
      <div className="icons-container">
        {iconsGroup.map((icon:string,index:number)=>{
          return(
            <img key={index} src={icon} alt={icon}/>
          )
        })}
      </div>
    </section>
  );
};

export default About;
