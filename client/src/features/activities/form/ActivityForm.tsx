import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import type { Activity } from "../../../lib/type/index.t";
import type { FormEvent } from "react";

type Props = {
  closeForm: () => void;
  activity?: Activity;
  submitForm: (activity: Activity) => void;
};

export default function ActivityForm({
  closeForm,
  activity,
  submitForm,
}: Props) {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());

    if (activity) data.id = activity.id;
    submitForm(data as unknown as Activity);
  };

  return (
    <Paper sx={{ borderRadius: 3, padding: 3 }}>
      <Typography variant="h5" gutterBottom color="primary">
        {activity ? "Edit Activity" : "Create Activity"}
      </Typography>

      <Box
        component="form"
        onSubmit={handleSubmit}
        display="flex"
        flexDirection="column"
        gap={3}
      >
        <TextField
          name="title"
          label="Title"
          defaultValue={activity?.title}
          required
          InputLabelProps={{ required: false }}
        />

        <TextField
          name="description"
          label="Description"
          defaultValue={activity?.description}
          multiline
          rows={3}
        />

        <TextField
          name="category"
          label="Category"
          defaultValue={activity?.category}
          required
          InputLabelProps={{ required: false }}
        />

        <TextField
          name="date"
          label="Date"
          type="date"
          defaultValue={activity?.date?.split("T")[0]}
          InputLabelProps={{ shrink: true, required: false }}
          required
        />

        <TextField
          name="city"
          label="City"
          defaultValue={activity?.city}
          required
          InputLabelProps={{ required: false }}
        />

        <TextField
          name="venue"
          label="Venue"
          defaultValue={activity?.venue}
          required
          InputLabelProps={{ required: false }}
        />

        <Box display="flex" justifyContent="end" gap={3}>
          <Button
            type="button" // Prevents accidental form submission
            onClick={closeForm}
            color="inherit"
          >
            Cancel
          </Button>
          <Button type="submit" color="success" variant="contained">
            {activity ? "Update" : "Submit"}
          </Button>
        </Box>
      </Box>
    </Paper>
  );
}
