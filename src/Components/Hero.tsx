import { Link } from "react-scroll";
import useBlinkEffect from "../Hooks/useBlinkEffect";

const Hero = () => {
  const jobTitles = ["Frontend", "Front-end", "Web", "React"];
  const { title, selectedTitle } = useBlinkEffect(jobTitles);

  return (
    <section className="hero-section" id="home">
      <div className="hero-left-side">
        <p className="title">Hi, I'm Miloš</p>
        <p className="title">
          <span className="blinking-cursor" aria-label={selectedTitle}>
            {title}
          </span>
          developer
        </p>
        <h1>Building the websites of <span className="highlight">tomorrow</span>, today</h1>
        <Link
          to="projects"
          smooth={true}
          offset={-30}
          duration={500}
          className="btn"
        >
          Checkout my work
        </Link>
      </div>
      <div className="hero-right-side">hero-right-side</div>
    </section>
  );
};

export default Hero;
