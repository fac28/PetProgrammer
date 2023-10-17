export default function Coffee(props) {
  function update() {
    function timePasses(age) {
      return age + 0.5;
    }

    props.alive && props.setEnergy((energy) => energy + 1);
    props.alive && props.setRounds(props.rounds + 1);
    props.energy - 1 < 0 && props.setAlive(false);

    if (props.rounds === 4) {
      props.setAge(timePasses(props.age));
      props.setEnergy(props.energy - 3);
      props.setRounds(0);
    }
  }

  return <button onClick={update}>Coffee</button>;
}
