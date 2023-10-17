import { useState } from "react";

import "./App.css";
import Sleep from "./Sleep.jsx";
import Coding from "./Coding.jsx";
import Coffee from "./Coffee.jsx";

function App() {
  const [energy, setEnergy] = useState(50);
  const [codingSkill, setCodingSkill] = useState(0);
  const [alive, setAlive] = useState(true);
  const [age, setAge] = useState(16);

  return (
    <>
      <div></div>
      <h1>Pet Programmer</h1>
      <div className="card">
        <Sleep energy={energy} setEnergy={setEnergy} age={age} setAge={setAge} alive={alive} />
        <Coding
          energy={energy}
          setEnergy={setEnergy}
          codingSkill={codingSkill}
          setCodingSkill={setCodingSkill}
          setAlive={setAlive}
          alive={alive}
        />
        <Coffee setEnergy={setEnergy} alive={alive} />
      </div>
      <div className="stats">
        <p>{alive ? `energy level is ${energy}` : `Your programmer is`}</p>
        <p>{alive ? `coding level is ${codingSkill}` : `DEAD!`}</p>
        <p>{alive? `age is {age}`:`aged {age}`}</p>
      </div>
    </>
  );
}

export default App;
