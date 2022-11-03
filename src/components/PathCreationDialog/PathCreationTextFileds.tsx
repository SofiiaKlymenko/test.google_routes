import React from "react";
import { Stack, TextField, Box, Button } from "@mui/material";
import MapIcon from "@mui/icons-material/Map";

function PathCreationTextFields(props: any) {
  return (
    <Box
      sx={{
        flex: 1,
        overflow: "auto",
        pt: 1,
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "inherit",
        flexDirection: "column",
      }}
    >
      <TextField
        id="outlined"
        label="Title"
        variant="outlined"
        sx={{ marginBottom: 1 }}
      />
      <TextField
        id="outlined-multiline-static"
        label="Short description"
        multiline
        rows={4}
        sx={{ marginBottom: 1 }}
      />
      <TextField
        id="outlined-multiline-static"
        label="Full description"
        multiline
        rows={4}
      />
      <Stack
        sx={{ justifyContent: "center", alignItems: "center", marginTop: 6 }}
      >
        <Stack direction="row">
          <MapIcon />
          Length 3,25 km
        </Stack>
        <Button
          variant="outlined"
          sx={{
            maxWidth: "fit-content",
            marginTop: 6,
            textTransform: "initial",
          }}
        >
          Add path
        </Button>
      </Stack>
    </Box>
  );
}

export default PathCreationTextFields;
