import aged from "../utils/aged.js";
import isExausted from "../utils/exhausted.js";

export default function Coding(props) {
  function UpdateStats() {
    props.setCodingSkill(props.codingSkill + 1);
    props.setEnergy(props.energy - 20);
    props.setRounds(props.rounds + 1);

    props.energy - 20 < 0 && isExausted(props);

    props.rounds === 4 && aged(props);
    props.alive && props.setImage("coding");
    props.codingSkill + 1 > 0 &&
      props.setUnlockedSkills([...props.unlockedSkills, "Javascript"]);
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
