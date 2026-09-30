import { Link } from "react-router-dom";
import { services } from "../data/Services.js";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero__inner">
          <div>
            <h1>We build websites and apps that people actually enjoy using.</h1>
            <p className="lead">
              Brightloom is a small product studio. We design, build and launch
              digital products for startups and growing teams.
            </p>
            <div className="actions">
              <Link to="/contact" className="btn btn--primary">
                Start a project
              </Link>
              <Link to="/services" className="btn btn--ghost">
                See our services
              </Link>
            </div>
          </div>

          <ul className="hero__stats" aria-label="Studio facts">
            <li>
              <strong>60+</strong>
              <span>products launched</span>
            </li>
            <li>
              <strong>9 yrs</strong>
              <span>working together</span>
            </li>
            <li>
              <strong>4.9/5</strong>
              <span>average client rating</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="section container">
        <h2>What we do</h2>
        <div className="grid grid--3">
          {services.map(({ to, title, summary }) => (
            <Link key={to} to={`/services/${to}`} className="card card--link">
              <h3>{title}</h3>
              <p>{summary}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="section container">
        <div className="callout">
          <h2>Have an idea that needs a team?</h2>
          <p>Tell us what you are building. We reply within one working day.</p>
          <Link to="/contact" className="btn btn--light">
            Contact us
          </Link>
        </div>
      </section>
    </>
  );
}
