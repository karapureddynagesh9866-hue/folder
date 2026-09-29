import { createContext, useContext, useReducer } from "react";

const CounterContext = createContext(null);

export const ACTIONS = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
  RESET: "RESET",
};

const initialState = {
  count: 0,
  lastAction: "None yet",
};

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

export function CounterProvider({ children }) {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
}

export function useCounter() {
  const context = useContext(CounterContext);
  if (context === null) {
    throw new Error("useCounter must be used inside <CounterProvider>");
  }
  return context;
}