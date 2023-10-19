import passedOut from "../utils/passedOut.js";

export default function Coffee({ state, dispatch }) {
  function update() {
    if (!state.alive) {
      return;
    }

    if (state.coffee > 9) {
      dispatch({ type: "update", payload: {
        alive: false, deathCause: "too much coffee" } });
    }

    dispatch({ type: "update", payload: {
      energy: state.energy + 2,
      coffee: state.coffee + 1,
      rounds: state.rounds + 1}
    });

    if (state.energy - 1 < 0) {
      dispatch({ type: "update", payload: { alive: false } });
    }

    if (state.rounds === 4) {
      passedOut(dispatch, state);
    }

    if (state.alive) {
      dispatch({ type: "update", payload: { image: "coffee" } });
    }
  }

  return <button onClick={update} disabled={!state.alive}>Coffee</button>;
}
