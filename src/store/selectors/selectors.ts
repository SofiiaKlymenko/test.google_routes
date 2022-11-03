import { PathsState } from "../reducers/PathsSlice";

function getSelectedPath(state: PathsState) {
  return state.paths.find((path) => path.id === state.selected);
}
