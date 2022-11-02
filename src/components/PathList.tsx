import {
  Box,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  OutlinedInput,
} from "@mui/material";
import ZoomOutMapIcon from "@mui/icons-material/ZoomOutMap";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";

function PathList(props: any) {
  return (
    <Box sx={{ flex: 1, overflow: "auto", pt: 1 }}>
      <FormControl sx={{ width: "100%" }} variant="outlined">
        <InputLabel htmlFor="search-path">Search...</InputLabel>
        <OutlinedInput
          id="search-path"
          type="text"
          label="Search..."
          endAdornment={
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          }
        />
      </FormControl>
      <List>
        {props.paths.map((path: any) => (
          <ListItem
            key={path.id}
            secondaryAction={
              <IconButton edge="end" aria-label="delete">
                <ArrowForwardIosIcon />
              </IconButton>
            }
          >
            <ListItemAvatar>
              <ZoomOutMapIcon />
            </ListItemAvatar>
            <ListItemText>
              {path.title}, {path.pathLength} km,
              {path.shortDescription}
            </ListItemText>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default PathList;
