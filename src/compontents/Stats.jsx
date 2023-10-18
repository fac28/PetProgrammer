export default function Stats(props) {
  const RenderedSkills = (props) => {
    return props.skills.map((skill) => <li>{skill}</li>);
  };
  return (
    <div className="stats">
      <p>
        {props.alive
          ? `energy level is ${props.energy}`
          : `${props.coderName} is DEAD from`}
      </p>
      <p>
        {props.alive
          ? `coding level is ${props.codingSkill}`
          : `${props.deathCause}!`}
      </p>

      <p>{props.alive ? `age is ${props.age}` : `aged ${props.age}`}</p>

      <p>Skills:</p>
      <ul>
        <RenderedSkills skills={props.unlockedSkills} />
      </ul>
    </div>
  );
}
