import style from "./Deposit.module.css";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDollarToSlot } from "@fortawesome/free-solid-svg-icons";
import Input from "./Input";
import { isValidCPF } from "../utils/cfpValidator";
import Modal from "./Modal";
import api from "../services/api";

const Deposit = ({ handleChange, input, ...props }) => {
  const [cpf, setCpf] = useState({ value: "", valid: null });
  const [valor, setValor] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [modalIcon, setModalIcon] = useState("fa-solid fa-circle-check");

  const submit = async (e) => {
    e.preventDefault();
    let total = valor.replaceAll(".", "").replace(",", ".");
    if (cpf.valid && total.length < 10 && +total[0] !== 0) {
      try {
        await api.post("", {
          cpf: cpf.value,
          amount: +total,
          type: "DEPOSITO",
        });
        setModalOpen(true);
        setCpf({ value: "", valid: null });
        setValor("");
        setModalIcon("fa-solid fa-circle-check");
      } catch (error) {
        setModalIcon("fa-triangle-exclamation");
        setModalOpen(true);
      }
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
      {modalOpen && (
        <Modal
          setOpenModal={setModalOpen}
          icon={modalIcon}
          textType="Depositar"
        />
      )}
      <div className="create">
        <form onSubmit={submit}>
          <label>CPF:</label>
          <Input
            value={cpf.value}
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
            }}
            onChange={(e) => {
              setCpf({
                value: e.target.value,
                valid: isValidCPF(e.target.value),
              });
            }}
            mask="cpf"
            placeholder="999.999.999-99"
            required
            maxLength="14"
          />
          <label>Valor:</label>
          <Input
            value={valor}
            style={
              valor[0] !== "0" && valor.length < 10
                ? { borderColor: "green" }
                : { borderColor: "red" }
            }
            name="price"
            mask="currency"
            onBlur={(e) => {
              setValor(e.target.value);
            }}
            onChange={(e) => {
              setValor(e.target.value);
            }}
            prefix="R$"
            placeholder="99.999,99"
            maxLength="9"
            required
          />
          <span style={{ margin: "10px" }}>Deposito minimo de R$1,00</span>
          <button>Deposito</button>
        </form>
      </div>
    </div>
  );
};

export default Deposit;
