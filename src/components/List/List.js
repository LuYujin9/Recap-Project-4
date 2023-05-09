import "./List.css";
export default function List({
  activities,
  condition,
  temperature,
  isGoodWeather,
  onDeleteActivity,
}) {
  return (
    <>
      <section className="weather-section">
        <span className="emoji" alt="emoji showing weathercondition">
          {condition}
        </span>{" "}
        {temperature}°
      </section>
      <p className="weather-text">
        {isGoodWeather
          ? "The weather is awesone / Go outside and:"
          : "Bad weather outside / Here's what you can do now:"}
      </p>
      <ul>
        {activities.map((activity) => (
          <li className="list-item" key={activity.id} id={activity.id}>
            {activity.name}
            <button
              className="delete-button"
              aria-label="delete button"
              onClick={() => onDeleteActivity(activity.id)}
            >
              ✖︎
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
