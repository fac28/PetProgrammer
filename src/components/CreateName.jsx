export default function CreateName({ dispatch }) {
  function updateName(event) {
    event.preventDefault();
    dispatch({ type: "update", payload: { coderName: event.target.petName.value } });
  }
  return (
    <form onSubmit={updateName}>
      <p>Name your programmer</p>
      <input name="petName" aria-label="name input"></input>
      <button type="submit">Start</button>
    </form>
  );
}
