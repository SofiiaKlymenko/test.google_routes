import { Divider, Stack } from "@mui/material";
import { useState } from "react";
import PathInfo from "./PathInfo";
import PathList from "./PathList";
import SelectAnyPath from "./SelectAnyPath";

function Home(props: any) {
  const [selectedPath, setSelectedPath] = useState(null);
  return (
    <Stack
      direction="row"
      sx={{ pt: 3, height: "100%", overflow: "auto" }}
      spacing={2}
    >
      <PathList
        paths={props.paths}
        setSelectedPath={setSelectedPath}
        selectedPath={selectedPath}
      />
      <Divider orientation="vertical" sx={{ borderColor: "#999" }} />
      {selectedPath ? (
        <PathInfo selectedPath={selectedPath} />
      ) : (
        <SelectAnyPath />
      )}
    </Stack>
  );
}

export default Home;
