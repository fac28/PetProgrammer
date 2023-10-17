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
  const [rounds, setRounds] = useState(0);

  return (
    <>
      <div></div>
      <h1>Pet Programmer</h1>
      <div className="card">
        <Sleep
          energy={energy}
          setEnergy={setEnergy}
          age={age}
          setAge={setAge}
          alive={alive}
          rounds= {rounds}
          setRounds={setRounds}
        />
        <Coding
          energy={energy}
          setEnergy={setEnergy}
          codingSkill={codingSkill}
          setCodingSkill={setCodingSkill}
          setAlive={setAlive}
          alive={alive}
          age={age}
          setAge={setAge}
          rounds= {rounds}
          setRounds={setRounds}
        />
        <Coffee
          setEnergy={setEnergy}
          alive={alive}
          age={age}
          setAge={setAge}
          rounds= {rounds}
          setRounds={setRounds}
        />
      </div>
      <div className="stats">
        <p>{alive ? `energy level is ${energy}` : `Your programmer is`}</p>
        <p>{alive ? `coding level is ${codingSkill}` : `DEAD!`}</p>
        <p>{alive? `age is ${age}`:`aged ${age}`}</p>
        <p>rounds: {rounds}</p>
      </div>
    </>
  );
}

export default App;
