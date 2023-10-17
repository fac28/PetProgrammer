import aged from "../utils/aged.js";
import isMad from "../utils/coffeeDeath.js";

export default function Coffee(props) {
  function update() {
    isMad(props);
    props.setEnergy(props.energy + 1);
    props.setCoffee(props.coffee + 1);
    props.setRounds(props.rounds + 1);
    props.energy - 1 < 0 && props.setAlive(false);

    if (props.rounds === 4) {
      aged(props);
    }

    props.alive && props.setImage("coffee");
  }

  return <button onClick={props.alive && update}>Coffee</button>;
}
