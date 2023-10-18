export default function isExhausted(dispatch) {
  dispatch({ type: "update", payload: { alive: false, deathCause: "exhaustion" } });
}
