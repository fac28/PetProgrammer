import aged from "../utils/aged.js";
import isMad from "../utils/coffeeDeath.js";

export default function Coffee({ state, dispatch }) {
  function update() {
    if (!state.alive) {
      return;
    }

    isMad(dispatch, state);
    dispatch({ type: "update", payload: { energy: state.energy + 1 } });
    dispatch({ type: "update", payload: { coffee: state.coffee + 1 } });
    dispatch({ type: "update", payload: { rounds: state.rounds + 1 } });
    if (state.energy - 1 < 0) {
      dispatch({ type: "update", payload: { alive: false } });
    }

    if (state.rounds === 4) {
      aged(dispatch, state);
    }

    if (state.alive) {
      dispatch({ type: "update", payload: { image: "coffee" } });
    }
  }

  return <button onClick={update}>Coffee</button>;
}
