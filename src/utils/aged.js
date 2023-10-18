import timePasses from "./timePasses";

export default function aged(dispatch, state) {
  dispatch({ type: "update", payload: { age: timePasses(dispatch, state) } });
  dispatch({ type: "update", payload: { energy: state.energy - 3 } });
  dispatch({ type: "update", payload: { rounds: 0 } });
}
