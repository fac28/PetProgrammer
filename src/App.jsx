import { useState } from "react";

import "./App.css";
import Sleep from "./compontents/Sleep.jsx";
import Coding from "./compontents/Coding.jsx";
import Coffee from "./compontents/Coffee.jsx";
import Stats from "./compontents/Stats";
import CreateName from "./compontents/CreateName";
import timePasses from "./utils/timePasses";

function App() {
  const [energy, setEnergy] = useState(50);
  const [codingSkill, setCodingSkill] = useState(0);
  const [alive, setAlive] = useState(true);
  const [coderName, setCoderName] = useState("");
  const [age, setAge] = useState(16);
  const [rounds, setRounds] = useState(0);
  const [coffee, setCoffee] = useState(0);
  const [deathCause, setDeathCause] = useState("");
  const [image, setImage] = useState("");
  const [unlockedSkills, setUnlockedSkills] = useState(["breathing"]);

  const imagePaths = {
    coffee:
      "https://s-media-cache-ak0.pinimg.com/736x/da/16/f0/da16f0202c2cb4973f699b1e362b34e8.jpg",
    coding:
      "https://tse2.mm.bing.net/th/id/OIP.2SEbYMe4RrMhSEmOikmfRQHaJ4?w=130&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    sleep:
      "https://i.pinimg.com/736x/16/20/ee/1620ee900a6adc4a482cf250ac8bee87--snoopy-peanuts.jpg",
    death:
      "https://tse2.mm.bing.net/th/id/OIP.g5L0x4dJMsx2g7xWuAiWaAHaHa?w=205&h=205&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  };

  const actionProps = {
    energy,
    setEnergy,
    alive,
    setAlive,
    age,
    setAge,
    rounds,
    setRounds,
    timePasses,
    deathCause,
    setDeathCause,
    coffee,
    setCoffee,
    codingSkill,
    setCodingSkill,
    image,
    setImage,
    unlockedSkills,
    setUnlockedSkills,
  };

  function displayActions() {
    let imagePath = imagePaths[image];

    return (
      <>
        <div className="card buttons">
          <Sleep {...actionProps} />
          <Coding {...actionProps} />
          <Coffee {...actionProps} />
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
      {coderName != "" && displayActions()}
      {coderName != "" ? (
        <Stats
          energy={energy}
          alive={alive}
          codingSkill={codingSkill}
          coderName={coderName}
          age={age}
          rounds={rounds}
          deathCause={deathCause}
          unlockedSkills={unlockedSkills}
        />
      ) : (
        <CreateName setCoderName={setCoderName} coderName={coderName} />
      )}
    </>
  );
}
export default App;
