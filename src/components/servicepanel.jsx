// Shared layout for the three nested Services pages.
export default function ServicePanel({ title, intro, points, tools, timeline }) {
  return (
    <article className="panel">
      <h2>{title}</h2>
      <p className="lead">{intro}</p>

      <h3>What you get</h3>
      <ul className="checklist">
        {points.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>

      <h3>Tools we use</h3>
      <ul className="tags">
        {tools.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>

      <p className="panel__meta">Typical timeline: {timeline}</p>
    </article>
  );
}