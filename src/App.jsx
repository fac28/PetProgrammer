import { useState } from "react";

import "./App.css";
import Sleep from "./components/Sleep.jsx";
import Coding from "./components/Coding.jsx";
import Coffee from "./components/Coffee.jsx";
import Stats from "./components/Stats";
import CreateName from "./components/CreateName";
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

  const imagePaths = {
    coffee:
      "https://s-media-cache-ak0.pinimg.com/736x/da/16/f0/da16f0202c2cb4973f699b1e362b34e8.jpg",
    coding:
      "https://tse2.mm.bing.net/th/id/OIP.2SEbYMe4RrMhSEmOikmfRQHaJ4?w=130&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    sleep:
      "https://toppng.com/uploads/preview/snoopy-sleeping-png-new-hot-snoopy-doghouse-round-pink-plastic-11563371983xglpk4sbr3.png",
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
        />
      ) : (
        <CreateName setCoderName={setCoderName} coderName={coderName} />
      )}
    </>
  );
}
export default App;
