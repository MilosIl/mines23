import { Link } from "react-scroll";
import useBlinkEffect from "../Hooks/useBlinkEffect";

const Hero = () => {
  const jobTitles = ["Frontend", "Front-end", "Web", "React"];
  const { title, selectedTitle } = useBlinkEffect(jobTitles);



  return (
    <section>
      <p>Hi I'm Milos</p>
      <h1>
        <span className="blinking-cursor" aria-label={selectedTitle}>
          {title}
        </span>
        developer
      </h1>
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
    </section>
  );
};

export default Hero;
