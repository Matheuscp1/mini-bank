import "./Content.css";
import React, { useCallback, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Transations from "./Transations";
import Withdraw from "./Withdraw";
import Input from "./Input";
import Deposit from "./Deposit";

const Content = (props) => {
  return (
    <main className="Content">
      <Routes>
        <Route path="/" element={<Transations />} />

        <Route path="withdraw" element={<Withdraw />} />
        <Route path="deposit" element={<Deposit />} />
      </Routes>
    </main>
  );
};

export default Content;
