import React from "react";
import { Stack, TextField, Box, Button, Typography } from "@mui/material";
import MapIcon from "@mui/icons-material/Map";

function PathCreationTextFields(props: any) {
  const handleInputChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    const value = target.value;
    const name = target.name;

    props.setValueChange({ [name]: value });
  };

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
        name="title"
        sx={{ marginBottom: 3 }}
        onChange={handleInputChange}
      />
      <TextField
        label="Short description"
        multiline
        rows={3}
        name="shortDescription"
        sx={{ marginBottom: 1 }}
        inputProps={{
          maxLength: 160,
        }}
        onChange={handleInputChange}
      />
      <Typography
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          fontSize: "12px",
          color: "#555",
        }}
      >
        Limit {props.shortDescription.length} of 160
      </Typography>
      <TextField
        label="Full description"
        multiline
        rows={3}
        name="fullDescription"
        onChange={handleInputChange}
        sx={{ marginTop: 2 }}
      />
      <Stack
        sx={{ justifyContent: "center", alignItems: "center", marginTop: 6 }}
      >
        <Stack direction="row" sx={{ color: "#555" }}>
          <MapIcon />
          Length {props.distance} km
        </Stack>
        <Button
          variant="outlined"
          sx={{
            maxWidth: "fit-content",
            marginTop: 6,
            textTransform: "initial",
            "&:hover": { background: "#e6e6e6" },
          }}
          onClick={() => props.addPath()}
        >
          Add path
        </Button>
      </Stack>
    </Box>
  );
}

export default PathCreationTextFields;
