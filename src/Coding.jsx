
export default function Coding(props){
return <button onClick={() =>{
          props.setCodingSkill((codingSkill) => codingSkill + 1)
          props.setEnergy((energy) => energy - 20)
        }
        }>
          Code
        </button>
}
