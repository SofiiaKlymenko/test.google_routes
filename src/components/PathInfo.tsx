import { Box, Button, Stack, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { IPath } from "../models/IPath";
import { pathSlice } from "../store/reducers/PathsSlice";

function PathInfo(props: any) {
  const dispatch = useAppDispatch();
  const { addToFavorite, removeFromFavorite, removePath } = pathSlice.actions;
  const { selected } = useAppSelector((state) => state.pathReducer);

  const changeFavorite = (path: IPath) => {
    if (path.isFavorite) {
      dispatch(removeFromFavorite(path));
    } else {
      dispatch(addToFavorite(path));
    }
  };

  return (
    <Box
      sx={{
        flex: 1,
        overflow: "auto",
        pt: 1,
      }}
    >
      <Box key={props.selectedPath.id}>
        <Stack
          direction="row"
          sx={{
            alignItems: "center",
            justifyContent: "space-between",
            //paddingBottom: 1,
          }}
        >
          <Typography variant="h5" sx={{ color: "#555" }}>
            {props.selectedPath.title}
          </Typography>
          <Typography variant="h6" sx={{ color: "#555" }}>
            {props.selectedPath.pathLength} km
          </Typography>
        </Stack>
        <Typography>{props.selectedPath.fullDescription}</Typography>
        <Stack justifyContent="center" alignItems="end">
          <Button
            variant="text"
            sx={{
              textDecoration: "underline",
              textTransform: "initial",
              color: "#1565c0",
            }}
            onClick={() => changeFavorite(props.selectedPath)}
          >
            {props.selectedPath.isFavorite
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
            onClick={() => dispatch(removePath(props.selectedPath))}
          >
            Remove
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}

export default PathInfo;
