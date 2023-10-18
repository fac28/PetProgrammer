import passedOut from "../utils/passedOut.js";
import isExhausted from "../utils/exhausted.js";

export default function Coding({ state, dispatch }) {
  function unlockSkills(skill, level) {
    state.codingSkill + 1 === level &&
      dispatch({
        type: "update",
        payload: { unlockedSkills: [...state.unlockedSkills, skill] },
      });
  }
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
    unlockSkills("HTML", 1);
    unlockSkills("JavaScript", 3);
    unlockSkills("CSS", 5);
    unlockSkills("Node", 10);
    unlockSkills("React", 15);
    unlockSkills("Typescript", 25);
  }

  return <button onClick={UpdateStats}>Code</button>;
}
