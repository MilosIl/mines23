import "./hero.css";
import { Link } from "react-scroll";
import useBlinkEffect from "../../Hooks/useBlinkEffect";
import hero from '../../assets/hero.png'

const Hero: React.FC = () => {
  const jobTitles = ["Frontend", "Front-end", "Web", "React"];
  const { title, selectedTitle } = useBlinkEffect(jobTitles);

  return (
    <section className="hero-section" id="home">
      <div className="hero-title">
        <p className="title">Hi, I'm Miloš</p>
        <p className="title">
          <span className="blinking-cursor" aria-label={selectedTitle}>
            {title}
          </span>
          developer
        </p>
      </div>
      <div className="hero-highlight">
        <h1>
          Building the websites of <span className="highlight">tomorrow</span>,
          today
        </h1>
        <Link
          aria-label="Checkout my work"
          to="projects"
          smooth={true}
          offset={-30}
          duration={500}
          tabIndex={0}
          className="btn">
          Checkout my work
        </Link>
      </div>
      <div className="hero-img">
      </div>
    </section>
  );
};

export default Hero;
