import React from 'react'
import type { Activity } from "../../../lib/type/index.t";
import { Button, Card, CardActions, CardContent, Chip, Typography } from '@mui/material';


type Props = {
  activities: Activity
};
function ActivityCard(Activity : Props) {
  return (
    <Card sx={{borderRadius: 3}}>
        <CardContent>
            <Typography variant="h5">  {Activity.activities.title}  </Typography>
            <Typography  sx={{color: 'text.secondary', mb: 1}}  >{Activity.activities.date}  </Typography>
            <Typography  variant="body2" >{Activity.activities.description}  </Typography>
            <Typography  variant="subtitle1" >{Activity.activities.city}/{Activity.activities.venue}  </Typography>
        </CardContent>
        <CardActions sx={{display: 'flex', justifyContent: 'space-between', pd: 2}}>
           <Chip label={Activity.activities.category} variant="outlined"/>
           <Button size="medium" variant="contained">View</Button>
        </CardActions>
    </Card>
  )
}

export default ActivityCard