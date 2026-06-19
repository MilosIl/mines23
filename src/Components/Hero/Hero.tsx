import "./hero.css";
import { Link } from "react-scroll";
import useBlinkEffect from "../../Hooks/useBlinkEffect";
import hero from '../../assets/hero.png'

const Hero: React.FC = () => {
  const jobTitles = ["Frontend", "Front-end", "Web", "React"];
  const { title, selectedTitle } = useBlinkEffect(jobTitles);

  return (
    <section className="hero">
      <h1>Creating Websites, Web Apps &amp; Mobile Applications</h1>
      <p>Our site is currently in a redesign phase — thank you for your patience.</p>
      <p>We're still here and happy to keep in touch.</p>
      <Link to="contact" smooth={true} duration={500} className="hero-cta">
        Contact us
      </Link>
    </section>
  );
};

export default Hero;
