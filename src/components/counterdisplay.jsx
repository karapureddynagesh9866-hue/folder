import { useCounter } from "../context/CounterContext";

function CounterDisplay() {
  const { state } = useCounter();

  return (
    <div className="display" aria-live="polite">
      <span className="display-label">Current count</span>
      <span className="display-value">{state.count}</span>
    </div>
  );
}

export default CounterDisplay;
