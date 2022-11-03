import React, { useEffect } from "react";
import "./App.css";
import { DocumentData, Query, QuerySnapshot } from "firebase/firestore";
import { collection, query, onSnapshot } from "firebase/firestore";
import Header from "./components/Header";
import Home from "./components/Home";
import { Stack } from "@mui/material";
import { pathSlice } from "./store/reducers/PathsSlice";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { IPath } from "./models/IPath";
import { db } from "./firebase";

function App() {
  const { paths } = useAppSelector((state) => state.pathReducer);
  const { setPaths } = pathSlice.actions;
  const dispatch = useAppDispatch();

  useEffect(() => {
    const q: Query<DocumentData> = query(collection(db, "paths"));
    onSnapshot(q, (querySnapshot: QuerySnapshot<DocumentData>) => {
      const allPaths = querySnapshot.docs.map(
        (q) =>
          ({
            ...q.data(),
            id: q.id,
          } as IPath)
      );
      dispatch(setPaths(allPaths));
    });
  }, []);

  return (
    <Stack sx={{ height: "100vh", p: "24px 36px", boxSizing: "border-box" }}>
      <Header />
      <Home paths={paths} />
    </Stack>
  );
}

export default App;
