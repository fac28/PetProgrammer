export default function Sleep({ state, dispatch }) {
  function update() {
    if (!state.alive) {
      // Don't allow sleep if not alive
      return;
    }

    // Dispatch actions to update the state
    dispatch({ type: "update", payload: {
      energy: state.energy + 31,
      age: state.age + 1,
      rounds: 0,
      coffee: 0,
      image: "sleep"
     } });
  }

  return (
    <button onClick={update} disabled={!state.alive}>
      Sleep
    </button>
  );
}
