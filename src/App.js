import "./App.css";
import Form from "./components/Form/Form";
import { useState } from "react";
import { uid } from "uid";

function App() {
  const [activities, setActivities] = useState([]);
  console.log(activities);

  function handleAddActivity(activity) {
    const newActivity = {
      name: activity.name,
      isForGoodWeather: activity.isForGoodWeather === "on" ? true : false,
      id: uid(),
    };
    setActivities([newActivity, ...activities]);
  }
  return (
    <div className="App">
      <Form onAddActivity={handleAddActivity} />
    </div>
  );
}

export default App;
