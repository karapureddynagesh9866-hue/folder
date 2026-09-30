import PageHeader from "../components/pageheader.jsx";

const products = [
  {
    name: "Loomdesk",
    price: "₹1,499 / month",
    text: "A shared inbox that turns customer emails into tasks your team can assign and track.",
  },
  {
    name: "Tally Board",
    price: "₹799 / month",
    text: "A lightweight kanban board for small teams. No setup, no training needed.",
  },
  {
    name: "Fieldnote",
    price: "Free",
    text: "A mobile app for capturing notes, photos and voice memos on site visits.",
  },
];

export default function Products() {
  return (
    <>
      <PageHeader
        title="Products"
        intro="Tools we built for ourselves first, then opened up to everyone."
      />
      <section className="section container">
        <div className="grid grid--3">
          {products.map(({ name, price, text }) => (
            <article key={name} className="card">
              <h3>{name}</h3>
              <p>{text}</p>
              <p className="price">{price}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
