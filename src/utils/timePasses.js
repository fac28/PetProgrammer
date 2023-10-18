import isOld from "./deathCheck";

export default function timePasses(dispatch, state) {
  isOld(dispatch, state);
  dispatch({ type: "update", payload: { age: state.age + 1 } });
}
