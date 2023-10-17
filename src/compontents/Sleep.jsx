export default function Sleep(props) {
  function update() {
    props.setEnergy((energy) => energy + 31);
    props.setAge(props.timePasses(props));
    props.setRounds(0);
    props.setCoffee(0);
    props.setImage("sleep");
  }

  return <button onClick={() => props.alive && update()}>Sleep</button>;
}
