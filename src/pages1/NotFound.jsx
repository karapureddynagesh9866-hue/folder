import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="section container notfound">
      <h1>Page not found</h1>
      <p className="lead">The address you entered does not match any page.</p>
      <Link to="/" className="btn btn--primary">
        Go to the home page
      </Link>
    </section>
  );
}