import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import GoogleMapReact, { ClickEventValue } from "google-map-react";
import RoomIcon from "@mui/icons-material/Room";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
import { GOOGLE_MAPS_API_KEY } from "../../constants/constants";

function PathCreationMap(props: any) {
  const [mapReference, setMapReference] = useState(null);
  const [mapsReference, setMapsReference] = useState(null);

  const [markers, setMarkers] = useState<{ lat: number; lng: number }[]>([]);
  const [marker, setMarker] = useState<{ lat: number; lng: number } | null>(
    null
  );

  const defaultProps = {
    center: {
      lat: 49.4235684,
      lng: 32.0756282,
    },
    zoom: 17,
  };

  const onClickHandler = ({ lat, lng }: ClickEventValue) => {
    setMarker({ lat, lng });
  };

  const addMarker = () => {
    if (!marker) return;

    const newMarkers = [...markers, marker as { lng: number; lat: number }];

    setMarkers(newMarkers);
    setMarker(null);
    addDirections(newMarkers);
  };

  const addDirections = (markers: { lat: number; lng: number }[]) => {
    if (mapsReference && mapsReference) {
      //@ts-ignore
      const directionsService = new mapsReference.DirectionsService();
      //@ts-ignore
      const directionsDisplay = new mapsReference.DirectionsRenderer();

      const directionsObj: google.maps.DirectionsRequest = {
        origin: markers[0],
        destination: markers[markers.length - 1],
        waypoints: [
          ...markers
            .slice(1, markers.length)
            .map(
              (marker) =>
                ({ location: marker } as google.maps.DirectionsWaypoint)
            ),
        ],
        travelMode: google.maps.TravelMode.WALKING,
      };

      directionsService.route(
        directionsObj,
        (
          response: google.maps.DirectionsResult,
          status: google.maps.DirectionsStatus
        ) => {
          if (status === "OK") {
            const directionsResult = response as google.maps.DirectionsResult;

            props.setDirectionsResult(directionsResult);

            directionsDisplay.setDirections(directionsResult);
            const routePolyline = new (
              mapsReference as typeof google.maps
            ).Polyline({
              path: directionsResult.routes[0].overview_path,
            });
            routePolyline.setMap(mapReference);
          } else {
            window.alert("Directions request failed due to " + status);
          }
        }
      );
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
      <Box sx={{ height: "100%", width: "100%", position: "relative" }}>
        <Button
          onClick={addMarker}
          sx={{
            background: "#fff",
            position: "absolute",
            top: 0,
            zIndex: 1,
            left: "45%",
            textTransform: "initial",
            "&:hover": { background: "#e6e6e6" },
          }}
          variant="outlined"
        >
          Add marker
        </Button>
        <GoogleMapReact
          bootstrapURLKeys={{ key: GOOGLE_MAPS_API_KEY }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
          onClick={onClickHandler}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => {
            setMapReference(map);
            setMapsReference(maps);
          }}
        >
          {markers.map((m, index) => (
            // @ts-ignore
            <RoomIcon
              sx={{ color: "red" }}
              key={index}
              lat={m.lat}
              lng={m.lng}
            />
          ))}
          {marker && (
            // @ts-ignore
            <RoomOutlinedIcon lat={marker.lat} lng={marker.lng} />
          )}
        </GoogleMapReact>
      </Box>
    </Box>
  );
}

export default PathCreationMap;
