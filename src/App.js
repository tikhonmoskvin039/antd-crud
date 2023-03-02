import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import CRUDTable from "./components/CRUDTable/CRUDTable";
import Validation from "./components/Validation/Validation";
import { Typography } from "antd";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Typography.Title>Ant DESIGN trainee</Typography.Title>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/crudTable" element={<CRUDTable />} />
        <Route path="/validation" element={<Validation />} />
      </Routes>
    </div>
  );
}

export default App;
