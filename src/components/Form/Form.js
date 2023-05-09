import "./Form.css";

export default function Form({ onAddActivity }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    onAddActivity(data);
    event.target.reset();
    event.target.name.focus();
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="form"
      aria-labelledby="formHeading"
    >
      <h2 id="formHeading">Add new Activity:</h2>
      <label htmlFor="name">Name:</label>
      <input type="text" name="name" id="name" />
      <label htmlFor="isForGoodWeather">
        <input type="checkbox" name="isForGoodWeather" id="isForGoodWeather" />
        Good-weather activity:{" "}
      </label>

      <button type="submit" aria-label="Click to add activity!">
        Submit
      </button>
    </form>
  );
}
