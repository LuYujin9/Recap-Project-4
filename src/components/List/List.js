import "./List.css";
export default function List({ activities, weather, onDeleteActivity }) {
  console.log("the weather", weather);
  console.log(activities);
  const { condition, temperature, isGoodWeather } = weather;
  return (
    <>
      <section className="weather-section">
        <span className="emoji" alt="emoji showing weathercondition">
          {weather.condition}
        </span>{" "}
        {weather.temperature}°
      </section>
      <p className="weather-text">
        {weather.isGoodWeather
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
              x
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
