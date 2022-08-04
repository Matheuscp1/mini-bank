import "./Content.css";
import { Route, Routes } from "react-router-dom";
import Transations from "./Transations";
import Withdraw from "./Withdraw";
import Deposit from "./Deposit";
const Content = (props) => {
  return (
    <main className="Content">
      <Routes>
        <Route path="/" element={<Transations />} />
        <Route path="/:id" element={<Transations />} />
        <Route path="withdraw" element={<Withdraw />} />
        <Route path="deposit" element={<Deposit />} />
      </Routes>
    </main>
  );
};

export default Content;
