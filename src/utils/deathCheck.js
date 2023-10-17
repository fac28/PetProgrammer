export default function isOld(props) {
  if (props.age + 1 > 49) {
    props.setAlive(false);
    props.setDeathCause("being too old");
    return;
  }
}
