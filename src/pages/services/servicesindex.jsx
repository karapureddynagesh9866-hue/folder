import { Link } from "react-router-dom";
import { services } from "../../data/Services.js";

// Shown at /services (the index child route).
export default function ServicesIndex() {
  return (
    <div className="panel">
      <h2>Choose a service</h2>
      <p className="lead">
        Every project starts with a short call. From there we recommend the
        smallest team that can do the job well.
      </p>
      <div className="grid">
        {services.map(({ to, title, summary }) => (
          <Link key={to} to={to} className="card card--link">
            <h3>{title}</h3>
            <p>{summary}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
