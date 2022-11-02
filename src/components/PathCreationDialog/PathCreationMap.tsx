import { Box, Button, Stack } from "@mui/material";

function PathCreationMap() {
  return (
    <Box
      sx={{
        flex: 1,
        overflow: "auto",
        pt: 1,
      }}
    >
      <Button sx={{ textTransform: "initial" }} variant="outlined">
        Add marker
      </Button>
    </Box>
  );
}

export default PathCreationMap;
