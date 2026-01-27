import { Grid } from "@mui/material";
import type { Activity } from "../../../lib/type/index.t";
import ActivityList from "./ActivityList";

type Props = {
  activities: Activity[];
};

export default function ActivityDashboad({ activities }: Props) {
  return (
    <Grid container spacing={3}>
      <Grid size={9}>
        <ActivityList activities={activities} />
      </Grid>
    </Grid>
  );
}
