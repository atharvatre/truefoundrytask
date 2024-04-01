import React from "react";
import Navrbar from "./Components/Navrbar";
import { Route, Routes } from "react-router-dom";
import Metrics from "./Components/Metrics";
import Logs from "./Components/Logs";
import HomePage from "./HomePage";
import Charts from "./Components/Charts";
import FetchData from "./Components/FetchData";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/metrics" element={<FetchData />} />
        <Route path="/logs" element={<Logs />} />
        <Route path="/logs/:timestamp" element={<Logs />} />
        {/* <Route path="/logs/:timestamp" element={<Logs />} /> */}
      </Routes>
    </>
  );
};

export default App;
