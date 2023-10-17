export default function Coding(props) {
  console.log(props.alive);
  return (
    <button
      onClick={() => {
        props.setCodingSkill(props.codingSkill + 1);
        props.setEnergy(props.energy - 20);
        props.energy - 20 < 0 && props.setAlive(false);
      }}
    >
      Code
    </button>
  );
}
