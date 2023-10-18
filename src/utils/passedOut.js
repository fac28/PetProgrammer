export default function passedOut(dispatch, state) {
  // aged + lose energy
  dispatch({ type: "update", payload: {
    age: state.age + 1,
    energy: state.energy - 3,
    rounds: 0 } });
}
