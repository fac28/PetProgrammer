export default function Sleep(props) {
  function update() {
    props.alive && props.setEnergy((energy) => energy + 31);
    props.alive && props.setAge(props.timePasses(props.age));
    props.alive && props.setRounds(0);
  }

  return <button onClick={update}>Sleep</button>;
}
