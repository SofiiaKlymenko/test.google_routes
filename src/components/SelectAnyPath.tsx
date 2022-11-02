import { Box } from "@mui/material";
import ZoomOutMapIcon from "@mui/icons-material/ZoomOutMap";
import Typography from "@mui/material/Typography";

function SelectAnyPath() {
  return (
    <Box
      sx={{
        flex: 1,
        overflow: "auto",
        pt: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <ZoomOutMapIcon color="disabled" sx={{ fontSize: "150px" }} />
      <Typography variant="h6" sx={{ color: "#ccc" }}>
        Select any path
      </Typography>
    </Box>
  );
}

export default SelectAnyPath;
