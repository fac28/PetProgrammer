import aged from "../utils/aged.js";
import isExhausted from "../utils/exhausted.js";

export default function Coding({state, dispatch}) {
    function UpdateStats() {
      if (!state.alive) {
        // Don't allow coding if not alive
        return;
      }

      // Dispatch actions to update the state
      dispatch({ type: "update", payload: { codingSkill: state.codingSkill + 1 } });
      dispatch({ type: "update", payload: { energy: state.energy - 20 } });
      dispatch({ type: "update", payload: { rounds: state.rounds + 1 } });

      if (state.energy - 20 < 0) {
        isExhausted(dispatch);
      }

      if (state.rounds === 4) {
        aged(state, dispatch);
      }

      if (state.alive) {
        dispatch({ type: "update", payload: { image: "coding" } });
      }
    }

    return (
      <button onClick={UpdateStats}>Code</button>
    );
  }
