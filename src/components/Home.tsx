import { Divider, Stack } from "@mui/material";
import { useAppSelector } from "../hooks/redux";
import { getSelectedPath } from "../store/selectors/selectors";
import PathInfo from "./PathInfo";
import PathList from "./PathList";
import SelectAnyPath from "./SelectAnyPath";

function Home(props: any) {
  const selectedPath = useAppSelector((state) =>
    getSelectedPath(state.pathReducer)
  );

  return (
    <Stack
      direction="row"
      sx={{ pt: 3, height: "100%", overflow: "auto", flexWrap: "wrap" }}
      spacing={2}
    >
      <PathList paths={props.paths} selectedPath={selectedPath} />
      <Divider orientation="vertical" sx={{ borderColor: "#999" }} />
      {selectedPath ? <PathInfo /> : <SelectAnyPath />}
    </Stack>
  );
}

export default Home;
