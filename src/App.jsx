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
        <Sleep energy={energy} setEnergy={setEnergy} age={age} setAge={setAge}  />
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
        <p>age is {age}</p>
      </div>
    </>
  );
}

export default App;
