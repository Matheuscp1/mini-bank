import style from "./Deposit.module.css";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDollarToSlot } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

import Input from "./Input";

const Deposit = ({ handleChange, input, ...props }) => {
  const [cpf, setCpf] = useState("");
  const [valor, setValor] = useState("");

  const history = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    if (cpf.length !== 14) {
      return;
    }
    history("/");
  };

  return (
    <div className="menu-container">
      <div className={style.headerImg}>
        <div className="overlay"></div>
        <div className="balance">
          <h1>Deposito</h1>
          <div>
            <FontAwesomeIcon
              icon={faCircleDollarToSlot}
              sisubmite="1x"
              color="white"
            />
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
            maxLength="13"
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
          <button>Depositar</button>
        </form>
      </div>
    </div>
  );
};

export default Deposit;
