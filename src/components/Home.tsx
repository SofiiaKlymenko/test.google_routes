import { Divider, Stack } from "@mui/material";
import PathInfo from "./PathInfo";
import PathList from "./PathList";
import SelectAnyPath from "./SelectAnyPath";

function Home(props: any) {
  return (
    <Stack
      direction="row"
      sx={{ pt: 3, height: "100%", overflow: "auto" }}
      spacing={2}
    >
      <PathList paths={props.paths} />
      <Divider orientation="vertical" sx={{ borderColor: "#999" }} />
      {/* <SelectAnyPath /> */}
      <PathInfo paths={props.paths} />
    </Stack>
  );
}

export default Home;
