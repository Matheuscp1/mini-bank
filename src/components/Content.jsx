import "./Content.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Transations from "./Transations";
import Withdraw from "./Withdraw";

const Content = (props) => (
  <main className="Content">
    <Routes>
      <Route path="/" element={<Transations />} />

      <Route path="withdraw" element={<Withdraw />} />
    </Routes>
  </main>
);

export default Content;
