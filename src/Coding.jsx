export default function Coding(props) {

  function timePasses(age) {
    return age + 0.5;
  }

  function UpdateStats() {
    props.setCodingSkill(props.codingSkill + 1);
    props.setEnergy(props.energy - 20);
    props.setRounds(props.rounds + 1);
    props.energy - 20 < 0 && props.setAlive(false);

    if (props.rounds === 4) {
      props.setAge(timePasses(props.age));
      props.setEnergy(props.energy - 3);
      props.setRounds(0);
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
