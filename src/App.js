import "./App.css";
import Form from "./components/Form/Form";
import List from "./components/List/List";
import { useEffect } from "react";
import { useState } from "react";
import useLocalStorageState from "use-local-storage-state";
import { uid } from "uid";

function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });

  const [weather, setWeather] = useState({
    condition: "",
    temperature: 0,
    isGoodWeather: true,
  });

  useEffect(() => {
    async function fetchWeather() {
      try {
        const response = await fetch(
          "https://example-apis.vercel.app/api/weather"
        );
        const data = await response.json();
        setWeather(data);
      } catch (error) {
        console.log(error);
      }
    }
    const intvl = setInterval(fetchWeather, 5000);
    return () => {
      clearInterval(intvl);
    };
  }, []);

  const filterActivities = activities.filter(
    (activity) => activity.isForGoodWeather === weather.isGoodWeather
  );

  function handleAddActivity(activity) {
    const newActivity = {
      name: activity.name,
      isForGoodWeather: activity.isForGoodWeather === "on" ? true : false,
      id: uid(),
    };
    setActivities([newActivity, ...activities]);
  }

  //delete button
  function handleDeleteActivity(deleteId) {
    const newActivities = activities.filter(
      (activity) => activity.id !== deleteId
    );
    setActivities(newActivities);
  }

  return (
    <div className="App">
      <List
        {...weather}
        activities={filterActivities}
        onDeleteActivity={handleDeleteActivity}
      />
      <Form onAddActivity={handleAddActivity} />
    </div>
  );
}

export default App;
