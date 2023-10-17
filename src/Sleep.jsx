export default function Sleep (props) {

  function updateEnergy() {
    props.setEnergy((energy) => energy + 31)
  }

  return (
    <button onClick={updateEnergy}>
      Sleep
    </button>
  )
}
