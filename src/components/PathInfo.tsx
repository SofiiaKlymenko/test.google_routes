import { Box, Button, Stack, Typography } from "@mui/material";

function PathInfo(props: any) {
  return (
    <Box
      sx={{
        flex: 1,
        overflow: "auto",
        pt: 1,
      }}
    >
      {props.paths.map((path: any) => (
        <Box>
          <Stack
            direction="row"
            sx={{
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="h5" sx={{ color: "#555" }}>
              {path.title}
            </Typography>
            <Typography variant="h6" sx={{ color: "#555" }}>
              {path.pathLength} km
            </Typography>
          </Stack>
          <Typography>{path.fullDescription}</Typography>
          <Stack justifyContent="center" alignItems="end">
            <Button
              variant="text"
              sx={{
                textDecoration: "underline",
                textTransform: "initial",
                color: "#1565c0",
              }}
            >
              Add to favorite
            </Button>
            <Button
              variant="text"
              sx={{
                textDecoration: "underline",
                textTransform: "initial",
                color: "red",
              }}
            >
              Remove
            </Button>
          </Stack>
        </Box>
      ))}
    </Box>
  );
}

export default PathInfo;
