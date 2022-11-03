import React, { useEffect, useState } from "react";
import "./App.css";
import { initializeApp } from "firebase/app";
import {
  DocumentData,
  DocumentSnapshot,
  getFirestore,
  Query,
  QuerySnapshot,
} from "firebase/firestore";
import { collection, query, onSnapshot } from "firebase/firestore";
import Header from "./components/Header";
import Home from "./components/Home";
import { Stack } from "@mui/material";
import { pathSlice } from "./store/reducers/PathsSlice";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { IPath } from "./models/IPath";

function App() {
  const { paths } = useAppSelector((state) => state.pathReducer);
  const { setPaths } = pathSlice.actions;
  const dispatch = useAppDispatch();

  console.log(paths);

  //const [paths, setPaths] = useState<any>([]);
  const firebaseConfig = {
    apiKey: "AIzaSyBD-EbTfLwe2rYeNIo3K1iHb4dxISMGjhw",
    authDomain: "test--routes.firebaseapp.com",
    databaseURL:
      "https://test--routes-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "test--routes",
    storageBucket: "test--routes.appspot.com",
    messagingSenderId: "421050487718",
    appId: "1:421050487718:web:46ab0299c74b37e45c3567",
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

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
      // dispatch(addOnePath(allPaths[0]));
      dispatch(setPaths(allPaths));
      // setPaths(allPaths);
      console.log(allPaths);
    });

    // dispatch(
    //   setPaths([
    //     {
    //       title: "Pizza",
    //       shortDescription: "dsakdksak askddos ao kaosdk odkaos kod ksao",
    //       isFavorite: true,
    //       fullDescription:
    //         "dsakdksak askddos ao kaosdk odkaos kod ksao dsakdksak askddos ao kaosdk odkaos kod ksao dsakdksak askddos ao kaosdk odkaos kod ksao dsakdksak askddos ao kaosdk odkaos kod ksao dsakdksak askddos ao kaosdk odkaos kod ksao dsakdksak askddos ao kaosdk odkaos kod ksao dsakdksak askddos ao kaosdk odkaos kod ksao dsakdksak askddos ao kaosdk odkaos kod ksao dsakdksak askddos ao kaosdk odkaos kod ksao ",
    //       pathLength: 3.2,
    //       id: "buba",
    //     },
    //   ])
    // );
  }, []);

  return (
    <Stack sx={{ height: "100vh", p: "24px 36px", boxSizing: "border-box" }}>
      <Header />
      <Home paths={paths} />
    </Stack>
  );
}

export default App;
