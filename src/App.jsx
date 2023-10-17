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
          rounds={rounds}
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
          rounds={rounds}
          setRounds={setRounds}
        />
        <Coffee
          energy={energy}
          setEnergy={setEnergy}
          alive={alive}
          setAlive={setAlive}
          age={age}
          setAge={setAge}
          rounds={rounds}
          setRounds={setRounds}
        />
      </div>

      {coderName != "" ? (
        <Stats
          energy={energy}
          alive={alive}
          codingSkill={codingSkill}
          coderName={coderName}
          age={age}
          rounds={rounds}
        />
      ) : (
        <CreateName setCoderName={setCoderName} coderName={coderName} />
      )}
    </>
  );
}

export default App;
