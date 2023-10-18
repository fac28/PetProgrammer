import passedOut from "../utils/passedOut.js";
import isExhausted from "../utils/exhausted.js";

export default function Coding({state, dispatch}) {
    function UpdateStats() {
      if (!state.alive) {
        // Don't allow coding if not alive
        return;
      }

      // Dispatch actions to update the state
      dispatch({ type: "update", payload: {
        codingSkill: state.codingSkill + 1,
        energy: state.energy - 20,
        rounds: state.rounds + 1
       } });

      state.codingSkill + 1 > 0 &&
      dispatch({ type: "update", payload: { unlockedSkills: [...state.unlockedSkills, "Javascript"] }});

      if (state.energy - 20 < 0) {
        isExhausted(dispatch);
      }

      if (state.rounds === 4) {
        passedOut( dispatch, state);
      }

      if (state.alive) {
        dispatch({ type: "update", payload: { image: "coding" } });
      }
    }

    return (
      <button onClick={UpdateStats}>Code</button>
    );
  }
