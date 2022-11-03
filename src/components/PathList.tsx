import {
  Box,
  Stack,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  OutlinedInput,
  Typography,
} from "@mui/material";
import ZoomOutMapIcon from "@mui/icons-material/ZoomOutMap";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import StarIcon from "@mui/icons-material/Star";
import { useAppDispatch } from "../hooks/redux";
import { pathSlice } from "../store/reducers/PathsSlice";
import { IPath } from "../models/IPath";

function PathList(props: any) {
  const dispatch = useAppDispatch();
  const { setSelectedPath } = pathSlice.actions;
  const [searchValue, setSearchValue] = useState("");

  const [pathsList, setPathsList] = useState(props.paths);

  useEffect(() => {
    if (searchValue) {
      const filteredPaths = props.paths.filter(
        (path: IPath) =>
          path.title.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0 ||
          path.fullDescription
            .toLowerCase()
            .indexOf(searchValue.toLowerCase()) >= 0
      );
      setPathsList(filteredPaths);
    } else {
      setPathsList(props.paths);
    }
  }, [props.paths, searchValue]);

  const searchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  return (
    <Box sx={{ flex: 1, overflow: "auto", pt: 1, minWidth: "384px" }}>
      <FormControl sx={{ width: "100%" }} variant="outlined">
        <InputLabel htmlFor="search-path">Search...</InputLabel>
        <OutlinedInput
          id="search-path"
          type="text"
          label="Search..."
          onChange={searchChange}
          endAdornment={
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          }
        />
      </FormControl>
      <List>
        {pathsList.map((path: any) => (
          <ListItem
            key={path.id}
            onClick={() =>
              dispatch(
                setSelectedPath(
                  props.selectedPath?.id === path.id ? null : path.id
                )
              )
            }
            sx={{
              borderRadius: 1,
              cursor: "pointer",
              background:
                path.id === props.selectedPath?.id ? "#1976d2" : "inherit",
              color: path.id === props.selectedPath?.id ? "#fff" : "inherit",
            }}
            secondaryAction={
              <IconButton edge="end">
                <ArrowForwardIosIcon
                  fontSize="small"
                  sx={{
                    color:
                      path.id === props.selectedPath?.id ? "#fff" : "inherit",
                  }}
                />
              </IconButton>
            }
          >
            <ListItemAvatar>
              <ZoomOutMapIcon
                fontSize="large"
                sx={{
                  color: path.id === props.selectedPath?.id ? "#fff" : "#555",
                }}
              />
            </ListItemAvatar>
            <ListItemText>
              <Stack
                direction="row"
                sx={{ justifyContent: "space-between", alignItems: "center" }}
              >
                <Stack sx={{ maxWidth: "85%" }}>
                  <Typography sx={{ display: "flex" }}>
                    {path.isFavorite ? (
                      <StarIcon
                        fontSize="small"
                        sx={{
                          paddingRight: 1,
                          color:
                            path.id === props.selectedPath?.id
                              ? "#fff"
                              : "#1565c0",
                        }}
                      />
                    ) : (
                      ""
                    )}
                    {path.title}
                  </Typography>
                  <Typography sx={{ fontSize: "14px" }}>
                    {path.shortDescription}
                  </Typography>
                </Stack>
                {path.pathLength} km
              </Stack>
            </ListItemText>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default PathList;
