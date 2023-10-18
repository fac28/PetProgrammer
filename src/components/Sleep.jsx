import isOld from "../utils/deathCheck";

export default function Sleep({ state, dispatch }) {
  function update() {
    if (!state.alive) {
      // Don't allow sleep if not alive
      return;
    }

    isOld(dispatch, state)

    // Dispatch actions to update the state
    dispatch({ type: "update", payload: {
      energy: state.energy + 11,
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
