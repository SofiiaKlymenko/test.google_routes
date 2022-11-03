import { PathsState } from "../reducers/PathsSlice";

export function getSelectedPath(state: PathsState) {
  return state.paths.find((path) => path.id === state.selected);
}
