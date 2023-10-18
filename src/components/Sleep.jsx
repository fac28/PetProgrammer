import timePasses from "../utils/timePasses";

export default function Sleep({ state, dispatch }) {
  function update() {
    if (!state.alive) {
      // Don't allow sleep if not alive
      return;
    }

    // Dispatch actions to update the state
    dispatch({ type: "update", payload: { energy: state.energy + 31 } });
    dispatch({ type: "update", payload: { age: timePasses(state) } });
    dispatch({ type: "update", payload: { rounds: 0 } });
    dispatch({ type: "update", payload: { coffee: 0 } });
    dispatch({ type: "update", payload: { image: "sleep" } });
  }

  return (
    <button onClick={update} disabled={!state.alive}>
      Sleep
    </button>
  );
}
