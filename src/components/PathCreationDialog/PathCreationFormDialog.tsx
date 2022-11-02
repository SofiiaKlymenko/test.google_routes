import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  Stack,
} from "@mui/material";
import React from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import PathCreationTextFields from "./PathCreationTextFileds";
import PathCreationMap from "./PathCreationMap";

function PathCreationFormDialog(props: any) {
  const handleClose = () => {
    props.setOpen(false);
  };

  return (
    <Dialog
      open={props.open}
      onClose={handleClose}
      sx={{ "& .MuiDialog-paper": { width: "100%", maxHeight: 435 } }}
      maxWidth="lg"
    >
      <Stack direction="row">
        <Stack
          direction="row"
          sx={{
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <DialogTitle fontSize="medium" sx={{ color: "#555" }}>
            Add new path
          </DialogTitle>
          <Button>
            <CancelIcon />
          </Button>
        </Stack>
        <Divider sx={{ borderColor: "#999", mb: 2 }} />
        <Stack spacing={1} sx={{ p: 2 }}>
          <PathCreationTextFields />
          <Divider orientation="vertical" sx={{ borderColor: "#999" }} />
          <PathCreationMap />
        </Stack>
      </Stack>
    </Dialog>
  );
}

export default PathCreationFormDialog;
