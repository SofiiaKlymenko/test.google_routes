import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import path from "path";
import { array } from "yargs";
import { IPath } from "../../models/IPath";

export interface PathsState {
  paths: IPath[];
  isLoading: boolean;
  error: string;
  selected: string | null;
}

const initialState: PathsState = {
  paths: [],
  isLoading: false,
  error: "",
  selected: null,
};

export const pathSlice = createSlice({
  name: "path",
  initialState,
  reducers: {
    setPaths(state, action: PayloadAction<IPath[]>) {
      state.paths = action.payload.sort((a, b) =>
        a.isFavorite ? -1 : b.isFavorite ? 1 : 0
      );
    },
    addOnePath(state, action: PayloadAction<IPath>) {
      state.paths.push(action.payload);
    },
    removeFromFavorite(state, action: PayloadAction<IPath>) {
      const index = state.paths.findIndex(
        (path) => path.id === action.payload.id
      );
      state.paths[index].isFavorite = false;
    },
    addToFavorite(state, action: PayloadAction<IPath>) {
      const index = state.paths.findIndex(
        (path) => path.id === action.payload.id
      );
      state.paths[index].isFavorite = true;
    },
    removePath(state, action: PayloadAction<IPath>) {
      const index = state.paths.findIndex(
        (path) => path.id === action.payload.id
      );
      state.paths.splice(index, 1);
    },
    setSelectedPath(state, action: PayloadAction<string>) {
      state.selected = action.payload;
    },
  },
});

export default pathSlice.reducer;
