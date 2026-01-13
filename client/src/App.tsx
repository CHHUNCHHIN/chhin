import { List,ListItem,ListItemText,Typography } from "@mui/material";
import axios from "axios";
import {  useEffect, useState } from "react";

interface Activity {
  id: string;
  title: string;
}

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    axios.get<Activity[]>("https://localhost:5001/api/activities")
      .then(response => setActivities(response.data))
      .catch(err => console.error(err));
  }, []);

  return (
   
    <>
      <Typography variant="h3">Reactivities</Typography>
      <List>
        {activities.map((activity )=> (
          <ListItem key={activity.id}>
            <ListItemText>{activity.title}</ListItemText>
          </ListItem>
        ))};
      </List>
     
    </>
  );
}

export default App;
