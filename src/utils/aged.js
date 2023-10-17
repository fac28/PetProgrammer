export default function aged(props) {
  props.setAge(props.timePasses(props.age));
  props.setEnergy(props.energy - 3);
  props.setRounds(0);
}
