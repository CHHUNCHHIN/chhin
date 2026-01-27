import { Container, CssBaseline } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import ActivityDashboad from "../../features/activities/dashboad/ActivityDashboad";
import type { Activity } from "../../lib/type/index.t";

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    axios
      .get<Activity[]>("https://localhost:5001/api/activities")
      .then((response) => setActivities(response.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <CssBaseline>
        <NavBar />
        <Container maxWidth="xl" sx={{ mt: 3 }}>
          <ActivityDashboad activities={activities} />
        </Container>
      </CssBaseline>
    </>
  );
}

export default App;
