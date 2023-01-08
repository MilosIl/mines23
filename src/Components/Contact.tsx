import { FormEventHandler, useRef, useState } from "react";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const formRef = useRef<HTMLFormElement>(null);


  const handleCopy = (e: { target: { innerHTML: string; }; }) => {
    navigator.clipboard.writeText(e.target.innerHTML);
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    const form = formRef.current;
    event.preventDefault();
    if (!form) return;
    const poruka = Object.fromEntries(new FormData(form));
    console.log("poruka>>>", poruka);
    
    // treba da se ocisti polje sa unetim podacima da se ne salje vise  puta
  };
  return (
    <section className="contact-section" id="contact">
      
      <h2>Contact me</h2>
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
            rows={5}
            className="textarea"
          />

          <label htmlFor="message">Message</label>
        </div>

        <button className="btn-send" type="submit">
          Send message
        </button>
      </form>

      <div>
        <p>Feel free to reach out if you are interested in working with me</p>
        <span onClick={handleCopy}>info@mines-dev.com</span>
        <p>linkedin,github</p>
      </div>


    </section>
  );
};

export default Contact;
