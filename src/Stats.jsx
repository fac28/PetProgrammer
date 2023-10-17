export default function Stats(props) {
  console.log(props.coderName);
  return (
    <div className="stats">
      <p>
        {props.alive ? `energy level is ${props.energy}` : `Your programmer is`}
      </p>
      <p>{props.alive ? `coding level is ${props.codingSkill}` : `DEAD!`}</p>
    </div>
  );
}
