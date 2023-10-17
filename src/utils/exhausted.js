export default function isExausted(props) {
  props.setAlive(false);
  props.setDeathCause("exhaustion");
  return;
}
