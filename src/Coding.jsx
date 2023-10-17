import aged from "./utils/aged.js";

export default function Coding(props) {
  function UpdateStats() {
    props.alive && props.setCodingSkill(props.codingSkill + 1);
    props.alive && props.setEnergy(props.energy - 20);
    props.alive && props.setRounds(props.rounds + 1);
    props.energy - 20 < 0 && props.setAlive(false);

    if (props.rounds === 4) {
      aged(props);
    }
  }
  return (
    <button
      onClick={() => {
        props.alive && UpdateStats();
      }}
    >
      Code
    </button>
  );
}
