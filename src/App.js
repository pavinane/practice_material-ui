import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "@mui/material";
import "./App.css";
import TourCard from "./components/TourCard";
import PrimarySearchAppBar from "./components/Appbar";
import ButtonTypes from "./components/ButtonTypes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <PrimarySearchAppBar />

        <Container sx={{ marginY: 5 }}>
          <Routes>
            <Route path="/" element={<TourCard />} />

            <Route path="/buttons" element={<ButtonTypes />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
