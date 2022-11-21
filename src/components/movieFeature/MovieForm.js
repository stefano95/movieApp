import React from "react";
import {
  Box,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  OutlinedInput,
  Chip,
  Switch,
  FormControlLabel,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const genres = ["action", "comedy", "thriller", "mistery", "horror"];

const MovieForm = ({
  handleSubmit,
  type = "create",
  handleForm,
  movieData,
  children,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <TextField
        value={movieData.name}
        onChange={handleForm}
        fullWidth
        required
        label="Name"
        margin="dense"
        name="name"
      />
      <TextField
        value={movieData.released_on}
        onChange={handleForm}
        fullWidth
        required
        label="Released On"
        margin="dense"
        name="released_on"
      />
      <TextField
        value={movieData.disk}
        onChange={handleForm}
        required
        fullWidth
        label="Disk"
        margin="dense"
        name="disk"
      />
      {type !== "create" && (
        <>
          <TextField
            value={movieData.rating}
            onChange={handleForm}
            fullWidth
            type="number"
            label="Rating"
            margin="dense"
            name="rating"
          />
          <FormControl fullWidth margin="dense">
            <FormControlLabel
              control={
                <Switch
                  name="isWatched"
                  checked={!!movieData.isWatched}
                  onChange={(e) =>
                    handleForm({
                      ...e,
                      target: {
                        name: e.target.name,
                        value: e.target.checked,
                      },
                    })
                  }
                  inputProps={{ "aria-label": "controlled" }}
                />
              }
              label="Is watched?"
            />
          </FormControl>
          <FormControl fullWidth margin="dense">
            <InputLabel id="demo-multiple-chip-label">Chip</InputLabel>
            <Select
              labelId="demo-multiple-chip-label"
              id="demo-multiple-chip"
              multiple
              value={movieData.genres}
              onChange={handleForm}
              name="genres"
              input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
              renderValue={(selected) => (
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                  {selected.map((value) => (
                    <Chip key={value} label={value} />
                  ))}
                </Box>
              )}
            >
              {genres.map((genre) => (
                <MenuItem key={genre} value={genre}>
                  {genre}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </>
      )}
      <Box my={2} display="flex" justifyContent="space-between">
        <Button type="submit" variant="contained" endIcon={<SendIcon />}>
          {type !== "create" ? "Edit" : "Create"}
        </Button>
        {children}
      </Box>
    </form>
  );
};

export default MovieForm;
