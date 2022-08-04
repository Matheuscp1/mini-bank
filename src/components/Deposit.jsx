import style from "./Deposit.module.css";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDollarToSlot } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Input from "./Input";
import { isValidCPF } from "../utils/cfpValidator";
const Deposit = ({ handleChange, input, ...props }) => {
  const [cpf, setCpf] = useState("");
  const [valor, setValor] = useState("");

  const history = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    console.log(cpf);
    if (cpf.valid && valor.length < 11) {
      let reponse = await axios.post("http://localhost:8680/api/account", {
        cpf: cpf.value,
        amount: +valor,
        type: "DEPOSITO",
      });
      console.log(valor.length, reponse);
      history("/");
    }
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
              cpf.valid == null || cpf.valid
                ? { borderColor: "green" }
                : { borderColor: "red" }
            }
            name="cpf"
            onBlur={(e) => {
              setCpf({
                value: e.target.value,
                valid: isValidCPF(e.target.value),
              });
              console.log(cpf);
            }}
            mask="cpf"
            placeholder="999.999.999-99"
            required
            maxLength="14"
          />
          <label>Valor:</label>
          <Input
              style={
                valor.length  === 0 || valor.length < 11
                  ? { borderColor: "green" }
                  : { borderColor: "red" }
              }
            name="price"
            mask="currency"
            onBlur={(e) => {
              setValor(e.target.value.replaceAll(".", "").replace(",", "."));
              console.log(valor.length)
            }}
            prefix="R$"
            placeholder="9.999.999,99"
            maxLength="12"
            required
          />
          <button>Deposito</button>
        </form>
      </div>
    </div>
  );
};

export default Deposit;
