import { useState } from "react";

import "./App.css";
import Sleep from "./Sleep.jsx";
import Coding from "./Coding.jsx";
import Coffee from "./Coffee.jsx";
import Stats from "./Stats";
import CreateName from "./CreateName";

function App() {
  const [energy, setEnergy] = useState(50);
  const [codingSkill, setCodingSkill] = useState(0);
  const [alive, setAlive] = useState(true);
  const [coderName, setCoderName] = useState("");

  return (
    <>
      <div></div>
      <h1>Pet Programmer</h1>
      <div className="card">
        <Sleep setEnergy={setEnergy} alive={alive} />
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
      {coderName != "" ? (
        <Stats
          energy={energy}
          alive={alive}
          codingSkill={codingSkill}
          coderName={coderName}
        />
      ) : (
        <CreateName setCoderName={setCoderName} coderName={coderName} />
      )}
    </>
  );
}

export default App;
