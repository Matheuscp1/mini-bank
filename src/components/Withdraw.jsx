import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import "./Withdraw.css";
import Input from "./Input";
import { isValidCPF } from "../utils/cfpValidator";
import Modal from "./Modal";
import api from "../services/api";
const Withdraw = ({ ...props }) => {
  const [cpf, setCpf] = useState({ value: "", valid: null });
  const [valor, setValor] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [modalIcon, setModalIcon] = useState("fa-solid fa-circle-check");
  const [saqueDisponivel, setSaqueDisponivel] = useState({
    total: 0,
    cedula: [],
  });

  const submit = async (e) => {
    e.preventDefault();
    let total = valor.replaceAll(".", "").replace(",", ".");
    if (cpf.valid && valor.length < 10 && +total[0] !== 0) {
      setSaqueDisponivel(withdraw(total));
    }
  };

  const withdraw = (valor) => {
    let total = +valor;
    total = ~~total;
    let saqueDisponivel = { total, cedula: [] };
    let cedula = 100;
    let totalCedula = 0;
    let controlador = true;
    while (controlador) {
      if (total >= cedula) {
        total -= cedula;
        totalCedula += 1;
      } else {
        if (totalCedula > 0) {
          saqueDisponivel.cedula.push(
            `${totalCedula} cédula(s) de R$${cedula}`
          );
        }
        if (cedula === 100) {
          cedula = 50;
        } else if (cedula === 50) {
          cedula = 20;
        } else if (cedula === 20) {
          cedula = 10;
        } else if (cedula === 20) {
          cedula = 10;
        } else if (cedula === 10) {
          cedula = 5;
        } else if (cedula === 5) {
          cedula = 2;
        } else if (cedula === 2) cedula = 1;
        totalCedula = 0;
        if (total <= 0) {
          controlador = false;
        }
      }
    }
    return saqueDisponivel;
  };

  const sendWithDraw = async () => {
    setSaqueDisponivel({ total: 0, cedula: [] });
    try {
      await api.post("", {
        cpf: cpf.value,
        amount: saqueDisponivel.total,
        type: "SAQUE",
      });
      setModalOpen(true);
      setCpf({ value: "", valid: null });
      setValor("");
      setModalIcon("fa-solid fa-circle-check");
    } catch (error) {
      console.log(error.message);
      setModalIcon("fa-triangle-exclamation");
      setModalOpen(true);
    }
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
      {modalOpen && (
        <Modal
          setOpenModal={setModalOpen}
          icon={modalIcon}
          saqueDisponivel={saqueDisponivel}
          textType="Saque"
        />
      )}
      <div className="create">
        {saqueDisponivel.cedula.length === 0 ? (
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
            <span style={{ margin: "10px" }}>Saque minimo de R$1,00</span>
            <button>Deposito</button>
          </form>
        ) : (
          <div
            className="modalBackground"
            style={{ display: modalOpen ? "none" : "" }}
          >
            <div className="modalContainerWithDraw">
              <div className="title">
                <h1>
                  Saque será de{" "}
                  {saqueDisponivel.total.toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })}{" "}
                  deseja sacar?
                </h1>
                <FontAwesomeIcon
                  icon={"fa-triangle-exclamation"}
                  color={"yellow"}
                  fade
                  size="4x"
                  style={{ animationDuration: "3s", marginBottom: "20px" }}
                />
              </div>
              <span style={{ textAlign: "center" }}>
                <b>Cédula(s) disponivel para saque</b>{" "}
              </span>
              <div className="body">
                {" "}
                {saqueDisponivel.cedula.map((element) => {
                  return (
                    <ul key={element}>
                      <li className="item" style={{ padding: "10px" }}>
                        <div>
                          <span>{element}</span>
                        </div>
                      </li>
                    </ul>
                  );
                })}
              </div>
              <div className="footer">
                <button
                  onClick={() => {
                    setSaqueDisponivel({ total: 0, cedula: [] });
                  }}
                  id="cancelBtn"
                >
                  Voltar
                </button>
                <button onClick={sendWithDraw}>Sacar</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Withdraw;
