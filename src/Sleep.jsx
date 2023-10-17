export default function Sleep (props) {

  function timePasses(age) {
    return age + 0.5;
  }

  function update() {
    props.alive && props.setEnergy((energy) => energy + 31);
    props.setAge(timePasses(props.age))
    // reset rounds to 0
    props.setRounds(0)
  }

  return (
    <button onClick={update} >
      Sleep
    </button>
  )
}
