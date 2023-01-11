import { Link } from "react-scroll";
import useBlinkEffect from "../Hooks/useBlinkEffect";

const Hero = () => {
  const jobTitles = ["Frontend", "Front-end", "Web", "React"];
  const { title, selectedTitle } = useBlinkEffect(jobTitles);

  return (
    <section className="hero-section">
      <div className="hero-left-side">

      <p>Hi I'm Milos</p>
      <p>
        <span className="blinking-cursor " aria-label={selectedTitle}>
          {title}
        </span>
        developer
      </p>
      <h1>Building the websites of tomorrow, today</h1>
      <Link
        to="projects"
        smooth={true}
        spy={true}
        offset={-122}
        duration={1000}
        className="btn"
      >
        Checkout my work
      </Link>
      </div>
      <div className="hero-right-side">
        hero-right-side
      </div>
    </section>
  );
};

export default Hero;
