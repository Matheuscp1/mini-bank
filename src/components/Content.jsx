import "./Content.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Transations from "./Transations";

const Content = (props) => (
  <main className="Content">
    <Routes>
      <Route path="/" element={<Transations />} />

      <Route path="ss" element={<Transations />} />
    </Routes>
  </main>
);

export default Content;
