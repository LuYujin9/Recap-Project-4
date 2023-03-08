import "./List.css";
export default function List({ activities, isGoodWeather }) {
  return (
    <>
      <p>
        {isGoodWeather
          ? "Bad weather outside/ Here's what you can do now:"
          : "The weather is awesone/ Go outside and:"}
      </p>
      <ul>
        {activities.map((activity) => (
          <li className="list-item">{activity.name}</li>
        ))}
      </ul>
    </>
  );
}
