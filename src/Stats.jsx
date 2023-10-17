export default function Stats(props) {
  return (
    <div className="stats">
      <p>
        {props.alive
          ? `energy level is ${props.energy}`
          : `${props.coderName} is`}
      </p>
      <p>{props.alive ? `coding level is ${props.codingSkill}` : `DEAD!`}</p>

      <p>{props.alive ? `age is ${props.age}` : `aged ${props.age}`}</p>
    </div>
  );
}
