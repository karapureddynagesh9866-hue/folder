import { NavLink, Outlet } from "react-router-dom";
import PageHeader from "../components/pageheader.jsx";
import { services } from "../data/Services.js";

export default function ServicesLayout() {
  return (
    <>
      <PageHeader
        title="Services"
        intro="Three disciplines, one small team. Pick a service to see how we work."
      />

      <section className="container services">
        <nav className="subnav" aria-label="Services">
          {services.map(({ to, title }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                isActive ? "subnav__link active" : "subnav__link"
              }
            >
              {title}
            </NavLink>
          ))}
        </nav>

        <div className="services__content">
          <Outlet />
        </div>
      </section>
    </>
  );
}
