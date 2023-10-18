import passedOut from "../utils/passedOut.js";
import isMad from "../utils/coffeeDeath.js";

export default function Coffee({ state, dispatch }) {
  function update() {
    if (!state.alive) {
      return;
    }

    isMad(dispatch, state);
    dispatch({ type: "update", payload: {
      energy: state.energy + 1,
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

  return <button onClick={update}>Coffee</button>;
}
