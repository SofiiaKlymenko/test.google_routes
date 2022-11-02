import { Stack, TextField, Box } from "@mui/material";

function PathCreationTextFields() {
  return (
    <Box
      sx={{
        flex: 1,
        overflow: "auto",
        pt: 1,
      }}
    >
      <TextField
        id="outlined"
        label="Title"
        variant="outlined"
        sx={{ justifyContent: "center" }}
      />
      <TextField
        id="outlined-multiline-static"
        label="Short description"
        multiline
        rows={4}
      />
      <TextField
        id="outlined-multiline-static"
        label="Full description"
        multiline
        rows={4}
      />
    </Box>
  );
}

export default PathCreationTextFields;
