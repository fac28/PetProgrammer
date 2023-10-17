export default function Coffee(props) {
  function update() {
    function timePasses(age) {
      return age + 0.5;
    }

    props.alive && props.setEnergy((energy) => energy + 1);
    props.setRounds(props.rounds + 1);

    console.log(props.rounds)

    if (props.rounds === 4) {
      props.setAge(timePasses(props.age));
      props.setRounds(0); // Reset the rounds counter
    }
  }

  return <button onClick={update}>Coffee</button>;
}
