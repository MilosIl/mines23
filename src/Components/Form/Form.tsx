import { FormEventHandler, useState } from "react";
import { z } from "zod";
import "./form.css";

const formValidation = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Must be a valid email" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

type FormDataProps = z.infer<typeof formValidation>;

const Form = () => {
  const [formData, setFormData] = useState<FormDataProps>({
    name: "",
    email: "",
    message: "",
  });
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    const result = formValidation.safeParse(formData);
    if (!result.success) {
      setError(result.error.errors[0].message);
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/email/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message. Please try again.");
      }

      setIsEmailSent(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setIsEmailSent(false), 4000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      action="/email/"
      method="POST"
      className="form"
      onSubmit={handleSubmit}
      autoComplete="off"
      aria-label="Contact form">
      <div className="input-holder">
        <input
          id="name"
          aria-label="Your name"
          value={formData.name}
          onChange={handleChange}
          type="text"
          name="name"
          className="input"
          maxLength={100}
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
          maxLength={254}
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
          maxLength={2000}
          className="textarea"
        />
        <label htmlFor="message">Message:</label>
      </div>

      <button
        aria-label="Send a message"
        className={`btn btn-send${isLoading ? " btn-loading" : ""}`}
        type="submit"
        disabled={isLoading}>
        {isLoading ? (
          <>
            <span className="spinner" aria-hidden="true" />
            Sending...
          </>
        ) : (
          "Send message"
        )}
      </button>

      {isEmailSent && (
        <p className="form-success" role="status">
          Thank you! We'll be in touch soon.
        </p>
      )}
      {error && (
        <p className="form-error" role="alert">
          {error}
        </p>
      )}
    </form>
  );
};

export default Form;
