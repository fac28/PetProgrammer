export default function Coding(props) {
  function UpdateStats() {
    props.setCodingSkill(props.codingSkill + 1);
    props.setEnergy(props.energy - 20);
    props.energy - 20 < 0 && props.setAlive(false);
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
