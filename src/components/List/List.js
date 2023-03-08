import "./List.css";
export default function List({ activities, weather }) {
  console.log(weather);
  console.log(activities);
  return (
    <>
      <h2>
        <span alt="emoji showing weathercondition">{weather.condition}</span>{" "}
        {weather.temperature}°
      </h2>
      <p>
        {weather.isGoodWeather
          ? "The weather is awesone/ Go outside and:"
          : "Bad weather outside/ Here's what you can do now:"}
      </p>
      <ul>
        {activities.map((activity) => (
          <li className="list-item">{activity.name}</li>
        ))}
      </ul>
    </>
  );
}
