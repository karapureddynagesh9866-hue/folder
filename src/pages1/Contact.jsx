import { useState } from "react";
import PageHeader from "../components/pageheader.jsx";

const empty = { name: "", email: "", topic: "Web Development", message: "" };

export default function Contact() {
  const [values, setValues] = useState(empty);
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setValues((v) => ({ ...v, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setValues(empty);
  };

  return (
    <>
      <PageHeader
        title="Contact"
        intro="Tell us about your project. We reply within one working day."
      />

      <section className="section container contact">
        <div className="contact__info">
          <h2>Talk to us</h2>
          <p>hello@brightloom.example</p>
          <p>+91 40 5555 0142</p>
          <p>Road No. 36, Jubilee Hills, Hyderabad</p>
          <p>Monday to Friday, 10 am to 6 pm IST</p>
        </div>

        <form className="form" onSubmit={handleSubmit}>
          {sent && (
            <p className="notice" role="status">
              Message sent. We will get back to you within one working day.
            </p>
          )}

          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            value={values.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="topic">I need help with</label>
          <select
            id="topic"
            name="topic"
            value={values.topic}
            onChange={handleChange}
          >
            <option>Web Development</option>
            <option>App Development</option>
            <option>UI/UX Design</option>
            <option>Something else</option>
          </select>

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={values.message}
            onChange={handleChange}
            required
          />

          <button type="submit" className="btn btn--primary">
            Send message
          </button>
        </form>
      </section>
    </>
  );
}
