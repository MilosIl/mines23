import Card from "./Card";

import html from "../assets/mdi_html.svg";
import css from "../assets/mdi_css.svg";
import javascript from "../assets/mdi_javascript.svg";
import typescript from "../assets/mdi_typescript.svg";
import react from "../assets/mdi_react.svg";
import next from "../assets/mdi_next.svg";
import tailwind from "../assets/mdi_tailwind.svg";
import mui from "../assets/mdi_mui.svg";
import bootstrap from "../assets/mdi_bootstrap.svg";
import firebase from "../assets/mdi_firebase.svg";
import mongodb from "../assets/mdi_mongodb.svg";
import git from "../assets/mdi_git.svg";
import figma from "../assets/mdi_figma.svg";

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
      <p>
        Frontend development refers to the practice of building and maintaining
        the user interface of a website or application. It involves using
        languages such as HTML, CSS, and JavaScript to create the visual
        elements and interactions that users see and engage with when they visit
        a website. One of the most important aspects of frontend development is
        ensuring that the user experience is intuitive and seamless. This
        involves careful planning and consideration of how the interface will
        look and function across different devices and screen sizes. Frontend
        developers also need to be up-to-date on the latest trends and best
        practices in web design and development. This includes staying informed
        about new technologies and frameworks, such as React and Angular, which
        can help streamline the development process and create more efficient
        and effective interfaces. In addition to technical skills, frontend
        developers also need strong problem-solving and communication skills.
        They may work closely with designers, project managers, and other team
        members to ensure that the final product meets the needs and
        expectations of the client and end users. Overall, frontend development
        is an essential part of the web development process, and those who excel
        in this field are in high demand. Whether you are just starting out in
        your career or are an experienced developer looking to expand your
        skills, frontend development is a rewarding and challenging field that
        offers endless opportunities for growth and innovation.
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
      <div>
        <img src={html} alt={html} />
        <img src={css} alt={css} />
        <img src={javascript} alt={javascript} />
        <img src={typescript} alt={typescript} />
        <img src={react} alt={react} />
        <img src={next} alt={next} />
        <img src={tailwind} alt={tailwind} />
        <img src={mui} alt={mui} />
        <img src={bootstrap} alt={bootstrap} />
        <img src={mongodb} alt={mongodb} />
        <img src={firebase} alt={firebase} />
        <img src={git} alt={git} />
        <img src={figma} alt={figma} />
      </div>
    </section>
  );
};

export default About;
