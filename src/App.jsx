import { useReducer } from "react";
import { initialState } from "./utils/constants";

import "./App.css";

import Stats from "./components/Stats";
import CreateName from "./components/CreateName";
import DisplayActions from "./components/DisplayActions";

function reducer(state, action) {
  switch (action.type) {
    case "update":
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const actionProps = {
    state,
    dispatch,
  };

  return (
    <>
      <div></div>
      <h1>Pet Programmer</h1>
      {state && state.coderName !== "" && (
        <DisplayActions state={state} actionProps={actionProps} />
      )}
      {state && state.coderName !== "" ? (
        <Stats
          {...state}
        />
      ) : (
        <CreateName dispatch={dispatch} />
      )}
    </>
  );
}
export default App;
