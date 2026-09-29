import { createContext, useContext, useReducer } from "react";
import "./App.css";

/* ---------- Context + reducer ---------- */
const CounterContext = createContext(null);

const ACTIONS = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
  RESET: "RESET",
};

const initialState = { count: 0, lastAction: "None yet" };

function counterReducer(state, action) {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1, lastAction: "Incremented" };
    case ACTIONS.DECREMENT:
      return { count: state.count - 1, lastAction: "Decremented" };
    case ACTIONS.RESET:
      return { ...initialState, lastAction: "Reset" };
    default:
      return state;
  }
}

function CounterProvider({ children }) {
  const [state, dispatch] = useReducer(counterReducer, initialState);
  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
}

function useCounter() {
  const context = useContext(CounterContext);
  if (context === null) {
    throw new Error("useCounter must be used inside <CounterProvider>");
  }
  return context;
}

/* ---------- Components ---------- */
function CounterDisplay() {
  const { state } = useCounter();
  return (
    <div className="display" aria-live="polite">
      <span className="display-label">Current count</span>
      <span className="display-value">{state.count}</span>
    </div>
  );
}

function CounterControls() {
  const { dispatch } = useCounter();
  return (
    <div className="controls">
      <button
        className="btn btn-dec"
        onClick={() => dispatch({ type: ACTIONS.DECREMENT })}
      >
        Decrement
      </button>
      <button
        className="btn btn-reset"
        onClick={() => dispatch({ type: ACTIONS.RESET })}
      >
        Reset
      </button>
      <button
        className="btn btn-inc"
        onClick={() => dispatch({ type: ACTIONS.INCREMENT })}
      >
        Increment
      </button>
    </div>
  );
}

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

/* ---------- App ---------- */
function App() {
  return (
    <CounterProvider>
      <main className="page">
        <header className="page-head">
          <h1>Counter with useContext + useReducer</h1>
          <p>State and dispatch live in one Provider. No props are passed down.</p>
        </header>

        <section className="card">
          <CounterDisplay />
          <CounterControls />
        </section>

        <SharedStatePanel />
      </main>
    </CounterProvider>
  );
}

export default App;