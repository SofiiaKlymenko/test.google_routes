import GoogleMapReact from "google-map-react";
import { useEffect, useState } from "react";
import RoomIcon from "@mui/icons-material/Room";
import { GOOGLE_MAPS_API_KEY } from "../constants/constants";

const extractMarkers = (request: any) => {
  return [
    request.origin.location,
    ...request.waypoints.map((wp: any) => wp.location.location),
    request.destination.location,
  ];
};

function PathInfoMap(props: any) {
  const [mapReference, setMapReference] = useState(null);
  const [mapsReference, setMapsReference] = useState(null);

  const [markers] = useState(extractMarkers(props.directions.request));

  const defaultProps = {
    center: {
      lat: 49.4235684,
      lng: 32.0756282,
    },
    zoom: 16,
  };

  useEffect(() => {
    if (!mapsReference) return;
    // @ts-ignore
    const directionsDisplay = new mapsReference.DirectionsRenderer();

    directionsDisplay.setDirections(props.directions);
    // @ts-ignore
    const routePolyline = new mapsReference.Polyline({
      path: props.directions.routes?.[0]?.overview_path,
    });
    routePolyline.setMap(mapReference);
  }, [mapReference, mapsReference, props.directions]);

  return (
    <GoogleMapReact
      bootstrapURLKeys={{ key: GOOGLE_MAPS_API_KEY }}
      defaultCenter={defaultProps.center}
      defaultZoom={defaultProps.zoom}
      yesIWantToUseGoogleMapApiInternals
      onGoogleApiLoaded={({ map, maps }) => {
        setMapReference(map);
        setMapsReference(maps);
      }}
    >
      {markers.map((m, index) => (
        // @ts-ignore
        <RoomIcon sx={{ color: "red" }} key={index} lat={m.lat} lng={m.lng} />
      ))}
    </GoogleMapReact>
  );
}

export default PathInfoMap;
