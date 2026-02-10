import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import type { Activity } from "../../../lib/type/index.t";

type Props = {
  activity: Activity
  cancelSelectActivity : () => void;
  openForm?: (id?: string) => void;
  
};

export default function ActivityDetail({activity, cancelSelectActivity, openForm}: Props) {
  return (
    <Card sx={{ borderRadius: 3 }}>
     <CardMedia
          component="img"
         // height="200"
          src={`/images/categoryImages/${activity.category}.jpg`}
          alt={activity.category}
          height="300"
        />
      <CardContent>
        <Typography variant="h5" >{activity.title}</Typography>
        <Typography variant="subtitle1"  fontWeight='light'>{activity.date}</Typography>
        <Typography variant="body1" >{activity.description}</Typography>
        
      </CardContent>
      <CardActions>
        <Button onClick={() => openForm?.(activity.id)} color="primary"> Edit</Button>
        <Button onClick={cancelSelectActivity} color="inherit"> Cancel</Button>
      </CardActions>
    </Card>
  );
}
