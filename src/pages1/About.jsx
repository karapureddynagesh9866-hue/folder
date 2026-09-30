import PageHeader from "../components/pageheader.jsx";

const values = [
  {
    title: "Clarity first",
    text: "We explain trade-offs in plain language, so you always know why we chose an approach.",
  },
  {
    title: "Small and senior",
    text: "You work directly with the people building your product, not a layer of account managers.",
  },
  {
    title: "Built to last",
    text: "Clean code, documented decisions and handover sessions so your team can carry on without us.",
  },
];

const team = [
  { name: "Ananya Rao", role: "Founder, Product Strategy" },
  { name: "Karthik Reddy", role: "Lead Engineer" },
  { name: "Meera Iyer", role: "Design Lead" },
  { name: "Sameer Khan", role: "Mobile Engineer" },
];

export default function About() {
  return (
    <>
      <PageHeader
        title="About Brightloom"
        intro="We started in 2017 with three people and a shared belief: good software is a series of small, careful decisions."
      />

      <section className="section container">
        <h2>How we work</h2>
        <div className="grid grid--3">
          {values.map(({ title, text }) => (
            <div key={title} className="card">
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section container">
        <h2>The team</h2>
        <div className="grid grid--4">
          {team.map(({ name, role }) => (
            <div key={name} className="card person">
              <span className="avatar" aria-hidden="true">
                {name.split(" ").map((n) => n[0]).join("")}
              </span>
              <h3>{name}</h3>
              <p>{role}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
