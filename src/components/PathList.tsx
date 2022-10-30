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

const REACT_APP_GOOGLE_MAPS_API_KEY = "AIzaSyAW3fMnr6aUKyvB-3AzQjHJZqSy9l4XX9Q";

function generate(element: React.ReactElement) {
  return Array(3)
    .fill(5)
    .map((value) =>
      React.cloneElement(element, {
        key: value,
      })
    );
}

function PathList() {
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
        {generate(
          <ListItem
            secondaryAction={
              <IconButton edge="end" aria-label="delete">
                <ArrowForwardIosIcon />
              </IconButton>
            }
          >
            <ListItemAvatar>
              <ZoomOutMapIcon />
            </ListItemAvatar>
            <ListItemText>jhhjhkbhbkjhjkn</ListItemText>
          </ListItem>
        )}
      </List>
    </Box>
  );
}

export default PathList;
