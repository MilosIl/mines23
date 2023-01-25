import React, { FormEventHandler, useState } from 'react';
import axios from 'axios';
import linkedin from '../assets/mdi_linkedin.svg';
import github from '../assets/mdi_github.svg';
import {z} from 'zod'
interface IFormData {
  name: string;
  email: string;
  message: string;
}
const nameValidation = z.string().min(3);
const emailValidation = z.string().email();
const messageValidation = z.string().email();

const formValidation = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  message: z.string()
})

const Contact:React.FC = () => {
  const [formData, setFormData] = useState<IFormData>({
    name: '',
    email: '',
    message: '',
  });

  const handleCopy = (e: React.MouseEvent<HTMLElement>) => {
    navigator.clipboard.writeText('milos.ilic@mines-dev.com');
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
      // await axios.post('/send-email',formData)
      fetch('/send-email',{
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      console.log('formData', formData);
      alert('Email sent successfully');
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
          <p>Feel free to reach out if you are interested in working with me or for a chat </p>
          <span className="contact-email" onClick={handleCopy}>
            milos.ilic@mines-dev.com
          </span>
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
