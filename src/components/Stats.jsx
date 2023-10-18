export default function Stats(state) {
  return (
    <div className="stats">
      <p>
        {state.alive
          ? `energy level is ${state.energy}`
          : `${state.coderName} is DEAD from`}
      </p>
      <p>
        {state.alive
          ? `coding level is ${state.codingSkill}`
          : `${state.deathCause}!`}
      </p>

      <p>{state.alive ? `age is ${state.age}` : `aged ${state.age}`}</p>
    </div>
  );
}
