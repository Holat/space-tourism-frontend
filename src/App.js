import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header, Home } from "./components";
import { Destination, Crew, Technology } from "./pages";

function App() {
  return (
    <BrowserRouter basename="/space-tourism-frontend">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
