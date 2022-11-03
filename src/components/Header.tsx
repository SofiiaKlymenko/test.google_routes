import Button from "@mui/material/Button";
import ZoomOutMapIcon from "@mui/icons-material/ZoomOutMap";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";
import Divider from "@mui/material/Divider";
import PathCreationFormDialog from "./PathCreationDialog/PathCreationFormDialog";
import React from "react";

function Header() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <Stack direction="row" justifyContent="space-between">
        <Stack direction="row" spacing={2} alignItems="center">
          <ZoomOutMapIcon fontSize="large" sx={{ color: "#555" }} />
          <Typography variant="h4" sx={{ color: "#555" }}>
            Saunter
          </Typography>
        </Stack>
        <Button
          sx={{ textTransform: "initial" }}
          variant="contained"
          onClick={handleClickOpen}
        >
          Add path
        </Button>
      </Stack>
      <Divider sx={{ mt: 3, borderColor: "#999" }} />
      <PathCreationFormDialog open={open} setOpen={setOpen} />
    </>
  );
}

export default Header;
