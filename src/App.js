import "./App.css";
import Form from "./components/Form/Form";
import List from "./components/List/List";
//import { useState } from "react";
import useLocalStorageState from "use-local-storage-state";
import { uid } from "uid";

function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });
  console.log(activities);
  const isGoodWeather = true;
  const filterActivities = activities.filter(
    (activity) => activity.isForGoodWeather === isGoodWeather
  );

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
      <List activities={filterActivities} isGoodWeather={isGoodWeather} />
      <Form onAddActivity={handleAddActivity} />
    </div>
  );
}

export default App;
