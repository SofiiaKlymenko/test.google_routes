import React from "react";
import "./App.css";
import { initializeApp } from "firebase/app";
import Header from "./components/Header";
import { Box, Container } from "@mui/material";
import Home from "./components/Home";
import { Stack } from "@mui/material";

function App() {
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
  return (
    <Stack sx={{ height: "100vh", p: 2, boxSizing: "border-box" }}>
      <Header />
      <Home />
    </Stack>
  );
}

export default App;
