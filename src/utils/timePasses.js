import isOld from "./deathCheck.js";

export default function timePasses(props) {
  isOld(props);
  return +props.age + 1;
}
