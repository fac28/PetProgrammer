import { useReducer } from "react";

import "./App.css";
import Sleep from "./components/Sleep.jsx";
import Coding from "./components/Coding.jsx";
import Coffee from "./components/Coffee.jsx";
import Stats from "./components/Stats";
import CreateName from "./components/CreateName";
import {imagePaths, initialState} from "./utils/constants";
import {Dead} from "./components/dead"
import Apply from "./components/Apply";


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

  function displayActions() {
    let imagePath = imagePaths[state.image];

    return (
      <>
        <div className="card buttons">
        <Sleep {...actionProps} />
        <Coding {...actionProps} />
        <Coffee {...actionProps} />
        <Apply {...actionProps} />
        <Dead {...actionProps}/>
        </div>
        <div className="image">
          <img src={imagePath} />
        </div>
      </>
    );
  }

  return (
    <>
      <div></div>
      <h1>Pet Programmer</h1>
      {state && state.coderName != "" && displayActions()}
      {state && state.coderName != "" ? (
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
