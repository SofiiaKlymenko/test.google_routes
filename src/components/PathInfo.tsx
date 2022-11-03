import { Box, Button, Stack, Typography } from "@mui/material";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useAppSelector } from "../hooks/redux";
import { IPath } from "../models/IPath";
import { getSelectedPath } from "../store/selectors/selectors";
import PathInfoMap from "./PathInfoMap";

function PathInfo(props: any) {
  const selectedPath = useAppSelector((state) =>
    getSelectedPath(state.pathReducer)
  );

  const changeFavorite = async (path?: IPath) => {
    if (!path) return;

    // @ts-ignore
    const pathDocRef = doc(db, "paths", path.id);
    try {
      await updateDoc(pathDocRef, { ...path, isFavorite: !path.isFavorite });
    } catch (err) {
      alert(err);
    }
  };

  const deletePath = async (path?: IPath) => {
    // @ts-ignore
    const pathDocRef = doc(db, "paths", path?.id);
    try {
      await deleteDoc(pathDocRef);
    } catch (err) {
      alert(err);
    }
  };

  return (
    <Box
      sx={{
        flex: 1,
        overflow: "auto",
        pt: 1,
        minWidth: "384px",
        minHeight: "570px",
      }}
    >
      <Box
        key={selectedPath?.id}
        sx={{
          height: "75%",
        }}
      >
        <Stack
          direction="row"
          sx={{
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h5" sx={{ color: "#555" }}>
            {selectedPath?.title}
          </Typography>
          <Typography variant="h6" sx={{ color: "#555" }}>
            {selectedPath?.pathLength} km
          </Typography>
        </Stack>
        <Typography sx={{ color: "#555", fontSize: "14px" }}>
          {selectedPath?.fullDescription}
        </Typography>
        {selectedPath?.directions && (
          <PathInfoMap directions={JSON.parse(selectedPath.directions)} />
        )}
        <Stack justifyContent="center" alignItems="end">
          <Button
            variant="text"
            sx={{
              textDecoration: "underline",
              textTransform: "initial",
              color: "#1565c0",
            }}
            onClick={() => changeFavorite(selectedPath)}
          >
            {selectedPath?.isFavorite
              ? "Remove from favorites"
              : "Add to favorite"}
          </Button>
          <Button
            variant="text"
            sx={{
              textDecoration: "underline",
              textTransform: "initial",
              color: "red",
            }}
            onClick={() => deletePath(selectedPath)}
          >
            Remove
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}

export default PathInfo;
