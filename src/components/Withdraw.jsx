import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "./Withdraw.css";
import Input from "./Input";

const Withdraw = ({ ...props }) => {
  const [cpf, setCpf] = useState("");
  const [valor, setValor] = useState("");
  const history = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    if(cpf.length !== 14){
      return
  }
  history('/')
  };
  return (
    <div className="menu-container">
      <div className="headerImg">
        <div className="overlay"></div>
        <div className="balance">
          <h1>Saque</h1>
          <div>
            <FontAwesomeIcon icon={faDollarSign} sisubmite="1x" color="white" />
          </div>
        </div>
      </div>
      <div className="create">
        <form onSubmit={submit}>
          <label>CPF:</label>
          <Input
            style={
              cpf.length === 14 || cpf.length === 0
                ? { borderColor: "green" }
                : { borderColor: "red" }
            }
            name="cpf"
            onBlur={(e) => {
              setCpf(e.target.value);
            }}
            mask="cpf"
            placeholder="999.999.999-99"
            required
            maxLength="14"
          />
          <label>Valor:</label>
          <Input
            name="price"
            mask="currency"
            onBlur={(e) => {
              setValor(e.target.value);
            }}
            prefix="R$"
            placeholder="999.999.999,99"
            maxLength="13"
            required
          />
          <button>Saque</button>
        </form>
      </div>
    </div>
  );
};

export default Withdraw;
