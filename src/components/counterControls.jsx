import { ACTIONS, useCounter } from "../context/CounterContext";

function CounterControls() {
  const { dispatch } = useCounter();

  return (
    <div className="controls" aria-label="Counter controls">
      <button type="button" onClick={() => dispatch({ type: ACTIONS.DECREMENT })}>
        Decrease
      </button>
      <button type="button" onClick={() => dispatch({ type: ACTIONS.RESET })}>
        Reset
      </button>
      <button type="button" onClick={() => dispatch({ type: ACTIONS.INCREMENT })}>
        Increase
      </button>
    </div>
  );
}

export default CounterControls;
