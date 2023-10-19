export default function Apply({ state }) {

  //check level and then say they need the skill unlocked next
  const skills = ["HTML", "JavaScript", "CSS", "Node", "React", "Typescript"];
  const currentSkills = state.unlockedSkills;
  let difference = skills.filter(x => !currentSkills.includes(x));

  //make a string of the skills they need to unlock
  const missingSkills = difference.join(", ");

  function update() {
    if (missingSkills) {
      alert(`You need to unlock the following skills: ${missingSkills}`);
    } else {
      alert("We are looking for someone with more experience in the industry");

    }

  }
  return (
    <>
      <button onClick={update} disabled={!state.alive}>
        Apply for Job
      </button>
    </>
  );
}
