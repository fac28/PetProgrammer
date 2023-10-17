export default function isMad(props) {
  if (props.coffee > 9) {
    props.setAlive(false);
    props.setDeathCause("too much coffee");
    return;
  }
}
