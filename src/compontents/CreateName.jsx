export default function CreateName(props) {
  console.log("code name" + props.coderName);
  function updateName(event) {
    event.preventDefault();
    props.setCoderName(event.target.petName.value);
  }
  return (
    <form onSubmit={updateName}>
      <p>Add Name</p>
      <input name="petName" aria-label="name input"></input>
      <button type="submit">Submit</button>
    </form>
  );
}
