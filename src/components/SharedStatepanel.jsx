import { useCounter } from "../context/CounterContext";

function HeaderBadge() {
  const { state } = useCounter();
  return <span className="badge">Count: {state.count}</span>;
}

function SharedStatePanel() {
  const { state } = useCounter();

  return (
    <section className="panel">
      <h2>Shared through Context</h2>
      <p className="panel-note">
        These components receive no props. They read the same reducer state
        from the Provider.
      </p>

      <dl className="panel-grid">
        <div>
          <dt>Count (Panel)</dt>
          <dd>{state.count}</dd>
        </div>
        <div>
          <dt>Last action</dt>
          <dd>{state.lastAction}</dd>
        </div>
        <div>
          <dt>Count (Badge)</dt>
          <dd>
            <HeaderBadge />
          </dd>
        </div>
      </dl>
    </section>
  );
}

export default SharedStatePanel;