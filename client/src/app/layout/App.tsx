import { Box, Container, CssBaseline } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import ActivityDashboad from "../../features/activities/dashboad/ActivityDashboad";
import type { Activity } from "../../lib/type/index.t";

function App() {

  const [activities, setActivities] = useState<Activity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined);
  const [editMode, setEditMode] = useState(false);
  

  useEffect(() => {
    axios
      .get<Activity[]>("https://localhost:5001/api/activities")
      .then((response) => setActivities(response.data))
      .catch((err) => console.error(err));
  }, [])

  const handleSelectActivity = (id: string) => {
    setSelectedActivity(activities.find(x => x.id === id));
  };
  

  const handleCancelSelectActivity = () => {
    setSelectedActivity(undefined);
  }

  const handleFormOpen = (id?: string) => {
    if (id)  handleSelectActivity(id);
    else handleCancelSelectActivity();
    setEditMode(true);
  }

  const handleFormClose = () => {
    setEditMode(false);
  }

 const handleSubmit = (activity: Activity) => {
  if (activity.id) {
    setActivities(activities.map(x => x.id === activity.id ? activity :x))
 }else{
  const newActivity ={...activity, id: activities.length.toString()}; ;
  setSelectedActivity(newActivity);
  setActivities([...activities, newActivity]);
 }
 setEditMode(false);

 }
 const handleDelete = (id: string) => {
  setActivities(activities.filter(x => x.id !== id));
}

  return (
    <Box sx={{color:'#eeeee'}}>
      <CssBaseline>
        <NavBar  openForm={handleFormOpen} />
        <Container maxWidth="xl" sx={{ mt: 3 }}>
          <ActivityDashboad activity={activities} 
          selectActivity={handleSelectActivity}
          cancelSelectActivity={handleCancelSelectActivity}
          selectedActivity={selectedActivity}
          editMode={editMode}
          openForm={handleFormOpen}
          closeForm={handleFormClose}
          submitForm={handleSubmit}
          deleteActivity={handleDelete}
          />
        </Container>
      </CssBaseline>
    </Box>
  );
}

export default App;
