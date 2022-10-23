import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Users } from "./pages/users";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<Users />} />
      </Routes>
    </div>
  );
}

export default App;
