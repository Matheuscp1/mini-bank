import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "./Withdraw.css";
const Withdraw = (props) => {
  const [cpf, setCpf] = useState("");
  const [valor, setValor] = useState("");
  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    history("/");
  };

  const format = (amount) => {
    var atual = 600000.0;
    var f = atual.toLocaleString("pt-br", { minimumFractionDigits: 2 });
    //sem R$
    var f2 = atual.toLocaleString("pt-br", { minimumFractionDigits: 2 });
    console.log(f);
    console.log(
      Number(amount)
        .toFixed(2)
        .replace(/\d(?=(\d{3})+\\,)/g, "$&.")
    );
    return f;
  };

  function currency(e) {
    let value = e;
    value = value.replace(/\D/g, "");
    value = value.replace(/(\d)(\d{2})$/, "$1,$2");
    value = value.replace(/(?=(\d{3})+(\D))\B/g, ".");
    console.log(value);
    setCpf(value)
    return e;
  }

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
        <form onSubmit={handleSubmit}>
          <label>CPF:</label>
          <input
            type="text"
            required
            onBlur={(e) => currency(e.target.value)}
            value={cpf}
            onChange={(e) => currency(e.target.value)}
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
