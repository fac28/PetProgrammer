import aged from "./utils/aged.js";

export default function Coffee(props) {
  function update() {
    props.alive && props.setEnergy(props.energy + 1);
    props.alive && props.setRounds(props.rounds + 1);
    props.energy - 1 < 0 && props.setAlive(false);

    if (props.rounds === 4) {
      aged(props);
    }
  }

  return <button onClick={update}>Coffee</button>;
}
