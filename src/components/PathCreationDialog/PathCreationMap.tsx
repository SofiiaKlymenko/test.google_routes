import React from "react";
import { Box, Button, Stack } from "@mui/material";
// import { Wrapper, Status } from '@googlemaps/react-wrapper';
import GoogleMap from './GoogleMap';

const MAPS_APIKEY = 'AIzaSyCUiJBtAGHbO083UcTBIhW5cIPjxVDxoLY';

function PathCreationMap() {
  return (
    <Box
      sx={{
        flex: 1,
        overflow: "auto",
        pt: 1,
      }}
    >
        <GoogleMap/>
    </Box>
  );
}

export default PathCreationMap;
