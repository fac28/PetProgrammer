export default function Sleep (props) {

  function timePasses(age) {
    return age + 0.5;
  }

  function updateEnergy() {
    props.setEnergy(props.energy + 31)
    props.setAge(timePasses(props.age))
  }

  return (
    <button onClick={updateEnergy} >
      Sleep
    </button>
  )
}
