import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Tests } from "./pages/tests";
import { Users } from "./pages/users";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="tests" element={<Tests />} />
        <Route path="about" element={<Users />} />
      </Routes>
    </div>
  );
}

export default App;
