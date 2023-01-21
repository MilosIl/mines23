import React, { FormEventHandler, useRef, useState } from "react";

import linkedin from "../assets/mdi_linkedin.svg";
import github from "../assets/mdi_github.svg";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const handleCopy = (e: React.MouseEvent<HTMLElement>) => {
    navigator.clipboard.writeText("milos.ilic@mines-dev.com");
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const form = formRef.current;
    if (!form) return;
    const poruka = Object.fromEntries(new FormData(form));
    console.log("poruka>>>", poruka);

    setName("");
    setEmail("");
    setMessage("");
    alert('Email was sent!')
  };
  return (
    <section id="contact">
      <h2>Contact me</h2>
      <div className="contact-container">
        <form
          className="form"
          onSubmit={handleSubmit}
          ref={formRef}
          autoComplete="off"
        >
          <div className="input-holder">
            <input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              name="name"
              className="input"
              required
            />
            <label htmlFor="name">Name:</label>
          </div>
          <div className="input-holder">
            <input
              id="email"
              type="email"
              name="email"
              className="input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label className="label" htmlFor="email">
              Email:
            </label>
          </div>
          <div className="input-holder">
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={7}
              className="textarea"
            />

            <label htmlFor="message">Message:</label>
          </div>

          <button className="btn btn-send"  type="submit">
            Send message
          </button>
        </form>

        <div>
          <p>Feel free to reach out if you are interested in working with me</p>
          <span className="contact-email" onClick={handleCopy}>milos.ilic@mines-dev.com</span>
          <div className="contact-icon">
            <a href="www.linkedin.com/in/milos-ilic-dev">
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
