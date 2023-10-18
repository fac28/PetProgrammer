export default function isMad(dispatch, state) {
  if (state.coffee > 9) {
    dispatch({ type: "update", payload: { alive: false, deathCause: "too much coffee" } });
  }
}
