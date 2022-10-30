import { Divider, Stack } from "@mui/material";
import PathInfo from "./PathInfo";
import PathList from "./PathList";

function Home() {
  return (
    <Stack
      direction="row"
      sx={{ pt: 3, height: "100%", overflow: "auto" }}
      spacing={2}
    >
      <PathList />
      <Divider orientation="vertical" sx={{ borderColor: "#999" }} />
      <PathInfo />
    </Stack>
  );
}

export default Home;
