import { Box } from "@mui/material";
import ActivityCard from "./ActivityCard";
import type { Activity } from "../../../lib/type/index.t";

type Props = {
    activities:Activity [];
}
export default function ActivityList({activities}:Props) {
  return (
    <Box sx={{display: 'flex', flexDirection: 'column', gap: 3}}>
        {activities.map(Activity => (
            <ActivityCard key={Activity.id} activities={Activity} />
       ))}
    </Box>
  )
}
