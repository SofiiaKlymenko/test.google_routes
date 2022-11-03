import React, { useState } from "react";
import GoogleMapReact, { ClickEventValue } from "google-map-react";
import { Button } from "@mui/material";

const MAPS_APIKEY = "AIzaSyCUiJBtAGHbO083UcTBIhW5cIPjxVDxoLY";

const AnyReactComponent = ({ text }: any) => <div>{text}</div>;

export default function SimpleMap(): any {
  const [markers, setMarkers] = useState([
    { lat: 49.4235684, lng: 32.0756282 },
  ]);
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
    // console.log(event);
  };

  const addMarker = () => {
    if (!marker) return;

    setMarkers([...markers, marker as { lng: number; lat: number }]);
    setMarker(null);
  };

  return (
    <div style={{ height: "100%", width: "100%", position: "relative" }}>
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
        bootstrapURLKeys={{ key: MAPS_APIKEY }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        onClick={onClickHandler}
      >
        {markers.map((m, index) => (
          <AnyReactComponent
            key={index}
            lat={m.lat}
            lng={m.lng}
            text="**My Marker**"
          />
        ))}
        {marker && (
          <AnyReactComponent
            lat={marker.lat}
            lng={marker.lng}
            text="TEST NEW MARKER"
          />
        )}
      </GoogleMapReact>
    </div>
  );
}
