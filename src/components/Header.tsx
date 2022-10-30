import Button from "@mui/material/Button";
import ZoomOutMapIcon from "@mui/icons-material/ZoomOutMap";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";
import Divider from "@mui/material/Divider";

function Header() {
  return (
    <>
      <Stack direction="row" justifyContent="space-between">
        <Stack direction="row" spacing={2} alignItems="center">
          <ZoomOutMapIcon fontSize="large" sx={{ color: "#555" }} />
          <Typography variant="h4" sx={{ color: "#555" }}>
            Saunter
          </Typography>
        </Stack>
        <Button sx={{ textTransform: "initial" }} variant="contained">
          Add path
        </Button>
      </Stack>
      <Divider sx={{ mt: 3, borderColor: "#999" }} />
    </>
  );
}

export default Header;
