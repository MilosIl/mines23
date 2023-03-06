import React, { FormEventHandler, useState } from "react";
import './contact.css'
import { z } from "zod";
import linkedin from "../../assets/mdi_linkedin.svg";
import github from "../../assets/mdi_github.svg";

const formValidation = z.object({
  name: z.string().min(1,{message:"Name is required"}),
  email: z.string().min(1,{message:"Email is required"}).email({message:"Must be a valid email"}),
  message: z.string().min(1,{message:"Message is required"}),
});

type TFormData = z.infer<typeof formValidation>

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<TFormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleCopy = (e: React.MouseEvent<HTMLElement>) => {
    navigator.clipboard.writeText("milos.ilic@mines-dev.com");
    
  };
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    try {
      fetch("/send-email", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      alert("Email sent successfully");
      setFormData({
        name:"", email:"", message:""
      })
    } catch (err) {
      alert(err);
    }
  };
  return (
    
    <section id="contact">
      <h2>Contact me</h2>
      <div className="contact-container">
        <form className="form" onSubmit={handleSubmit} autoComplete="off">
          <div className="input-holder">
            <input
              id="name"
              value={formData.name}
              onChange={handleChange}
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
              value={formData.email}
              onChange={handleChange}
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
              value={formData.message}
              onChange={handleChange}
              required
              rows={7}
              className="textarea"
            />
            <label htmlFor="message">Message:</label>
          </div>
          <button className="btn btn-send" type="submit">
            Send message
          </button>
        </form>
        <div>
          <p>
            Feel free to reach out if you are interested in working with me or
            for a chat on email:
          </p>
          <span className="contact-email" onClick={handleCopy}>
            milos.ilic@mines-dev.com
          </span>
          <div className="contact-icon">
            <p>Social links:</p>
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
