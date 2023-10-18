export default function isOld(dispatch, state) {
  if (state.age + 1 > 49) {
    dispatch({ type: "update", payload: { alive: false, deathCause: "being too old" } });
  }
}
