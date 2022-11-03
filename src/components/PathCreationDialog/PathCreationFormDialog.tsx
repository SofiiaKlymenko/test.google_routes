import React, { useState } from "react";
import { Dialog, DialogTitle, Divider, IconButton, Stack } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase";

import { IPath } from "../../models/IPath";
import { useAppDispatch } from "../../hooks/redux";
import { pathSlice } from "../../store/reducers/PathsSlice";

import PathCreationTextFields from "./PathCreationTextFileds";
import PathCreationMap from "./PathCreationMap";

function PathCreationFormDialog(props: any) {
  const dispatch = useAppDispatch();
  const { setSelectedPath } = pathSlice.actions;

  const [form, setForm] = useState<IPath>({
    fullDescription: "",
    isFavorite: false,
    pathLength: 0,
    shortDescription: "",
    directions: "",
    title: "",
  });

  const setValueChange = (newValue: { [name: string]: string }) => {
    setForm({ ...form, ...newValue });
  };

  const setDistanceChange = (distance: number) => {
    setForm({ ...form, pathLength: distance });
  };

  const calcDistance = (directionsResult: google.maps.DirectionsResult) => {
    const distanceInM = directionsResult.routes[0].legs.reduce((acc, leg) => {
      return acc + (leg.distance as google.maps.Distance).value;
    }, 0);

    return Number(distanceInM / 100);
  };

  const setDirectionsChange = (newDirections: google.maps.DirectionsResult) => {
    setForm({
      ...form,
      directions: JSON.stringify(newDirections),
      pathLength: calcDistance(newDirections),
    });
  };

  const handleClose = () => {
    props.setOpen(false);
  };

  const addPath = async () => {
    try {
      const newPath = await addDoc(collection(db, "paths"), form);
      dispatch(setSelectedPath(newPath.id));
      props.setOpen(false);
    } catch (err) {
      alert(err);
    }
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
          <PathCreationTextFields
            shortDescription={form.shortDescription}
            paths={props.paths}
            addPath={addPath}
            setValueChange={setValueChange}
            distance={form.pathLength}
          />
          <Divider orientation="vertical" sx={{ borderColor: "#999" }} />
          <PathCreationMap
            setDistance={setDistanceChange}
            setDirectionsResult={setDirectionsChange}
          />
        </Stack>
      </Stack>
    </Dialog>
  );
}

export default PathCreationFormDialog;
