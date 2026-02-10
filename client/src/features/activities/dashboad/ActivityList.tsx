import { Box } from "@mui/material";
import ActivityCard from "./ActivityCard";
import type { Activity } from "../../../lib/type/index.t";

type Props = {
    activity:Activity []
    selectActivity : (id: string) => void;
    deleteActivity : (id: string) => void;
}
export default function ActivityList({activity, selectActivity, deleteActivity}:Props) {
  return (
    <Box sx={{display: 'flex', flexDirection: 'column', gap: 3}}>
        {activity.map(Activity => (
            <ActivityCard
             key={Activity.id}
              activity={Activity}
               selectActivity={selectActivity}
               deleteActivity={deleteActivity}
         />
       ))}
    </Box>
  )
}
