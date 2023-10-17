import { useState } from "react";

import "./App.css";
import Sleep from "./Sleep.jsx";
import Coding from "./Coding.jsx";
import Coffee from "./Coffee.jsx";

function App() {
  const [energy, setEnergy] = useState(50);
  const [codingSkill, setCodingSkill] = useState(0);
  const [alive, setAlive] = useState(true);

  return (
    <>
      <div></div>
      <h1>Pet Programmer</h1>
      <div className="card">
        <Sleep setEnergy={setEnergy} />
        <Coding
          energy={energy}
          setEnergy={setEnergy}
          codingSkill={codingSkill}
          setCodingSkill={setCodingSkill}
          setAlive={setAlive}
          alive={alive}
        />
        <Coffee setEnergy={setEnergy} />
      </div>
      <div className="stats">
        <p>energy level is {energy}</p>
        <p>coding level is {codingSkill}</p>
      </div>
    </>
  );
}

export default App;
