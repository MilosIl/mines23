import { FormEventHandler, useState } from "react";
import { z } from "zod";
import "./form.css";
const Form = () => {
  const formValidation = z.object({
    name: z.string().min(1, { message: "Name is required" }),
    email: z
      .string()
      .min(1, { message: "Email is required" })
      .email({ message: "Must be a valid email" }),
    message: z.string().min(1, { message: "Message is required" }),
  });
  type FormDataProps = z.infer<typeof formValidation>;

  const [formData, setFormData] = useState<FormDataProps>({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    try {
      fetch("https://www.mines-dev.com/email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (err) {
      alert(err);
    }
  };
  return (
    <form
      action="/email"
      method="POST"
      className="form"
      onSubmit={handleSubmit}
      autoComplete="off"
      aria-label={"Contact form"}>
      <div className="input-holder">
        <input
          id="name"
          aria-label="Your name"
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
          aria-label="Your email"
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
          aria-label="Your message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={7}
          className="textarea"
        />
        <label htmlFor="message">Message:</label>
      </div>
      <button
        aria-label="Send a message"
        className="btn btn-send"
        type="submit">
        Send message
      </button>
    </form>
  );
};

export default Form;
