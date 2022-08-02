import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "./Withdraw.css";
const Withdraw = (props) => {
  const [cpf, setCpf] = useState("");
  const [valor, setValor] = useState("");
  const history = useNavigate();




  return (
    <div className="menu-container">
      <div className="header-img">
        <div className="overlay"></div>
        <div className="balance">
          <h1>
            Saque
            <FontAwesomeIcon icon={faDollarSign} size="1x" color="white" />
          </h1>
        </div>
      </div>
      <div className="create">
        <form >
          <label>CPF:</label>
          <input
            type="text"
            required
            onBlur={(e) => setCpf(e.target.value)}
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
          />
          <label>Valor:</label>
          <input
            type="text"
            required
            value={valor}
            onChange={(e) => setValor(e.target.value)}
          />
          <button>Depositar</button>
        </form>
      </div>
    </div>
  );
};

export default Withdraw;
