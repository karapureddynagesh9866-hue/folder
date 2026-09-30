import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>© {new Date().getFullYear()} Brightloom Studio. Made in Hyderabad.</p>
        <p>
          <Link to="/contact">hello@brightloom.example</Link>
        </p>
      </div>
    </footer>
  );
}