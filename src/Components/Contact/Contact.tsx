import './contact.css'
import linkedin from "../../assets/mdi_linkedin.svg";
import github from "../../assets/mdi_github.svg";
import Form from '../Form/Form';

const Contact: React.FC = () => {
  const handleCopy = (e: React.MouseEvent<HTMLElement>) => {
    navigator.clipboard.writeText("milos.ilic@mines-dev.com");
  };

  return (    
    <section id="contact">
      <h2>Contact me</h2>
      <div className="contact-container">
        <Form/>
        <div className="contact-info">
          <p>
            Feel free to reach out if you are interested in working with me or
            for a chat on email:
          </p>
          <span aria-label='contact email' className="contact-email" onClick={handleCopy}>
            milos.ilic@mines-dev.com
          </span>
          <div className="contact-icon">
          <h4>Social links:</h4>
            <a href="https://www.linkedin.com/in/milos-ilic-dev">
              <img src={linkedin} alt={linkedin} />
            </a>
            <a href="https://github.com/MilosIl">
              <img src={github} alt={github} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
