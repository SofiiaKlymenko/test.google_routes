import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  IconButton,
  Stack,
} from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
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
      sx={{ "& .MuiDialog-paper": { width: "100%", height: "100%" } }}
      maxWidth="lg"
    >
      <Stack sx={{ height: "100%" }}>
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
          <IconButton onClick={handleClose} sx={{ p: 2 }}>
            <CloseIcon />
          </IconButton>
        </Stack>
        <Divider sx={{ borderColor: "#999", mb: 2 }} />
        <Stack
          spacing={1}
          direction="row"
          sx={{ p: 2, height: "100%", overflow: "auto" }}
        >
          <PathCreationTextFields paths={props.paths} />
          <Divider orientation="vertical" sx={{ borderColor: "#999" }} />
          <PathCreationMap />
        </Stack>
      </Stack>
    </Dialog>
  );
}

export default PathCreationFormDialog;
