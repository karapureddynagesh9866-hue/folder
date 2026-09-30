import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/products", label: "Products" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="nav">
      <div className="container nav__inner">
        <Link to="/" className="brand" onClick={close}>Brightloom</Link>

        <button
          type="button"
          className="nav__toggle"
          aria-expanded={open}
          aria-controls="primary-nav"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? "Close" : "Menu"}
        </button>

        <nav id="primary-nav" aria-label="Main"
             className={`nav__links${open ? " is-open" : ""}`}>
          {links.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              onClick={close}
              className={({ isActive }) =>
                isActive ? "nav__link active" : "nav__link"
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}