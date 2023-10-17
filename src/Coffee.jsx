export default function Coffee(props){

  function updateEnergy(){
    props.setEnergy((energy) => energy + 1)
  }
  
  return <button onClick={updateEnergy}>
    Coffee
  </button>
}
