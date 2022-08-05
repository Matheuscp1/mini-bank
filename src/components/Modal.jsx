import React from "react";
import "./Modal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

function Modal({ setOpenModal, icon, saqueDisponivel, textType }) {
  const history = useNavigate();
  let title =
    icon === "fa-triangle-exclamation"
      ? "Houve um erro durante a transação"
      : "Transação realizada com sucesso";
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="title">
          <h1>{title}</h1>
          <FontAwesomeIcon
            icon={
              (icon =
                icon === "fa-triangle-exclamation"
                  ? icon
                  : "fa-solid fa-circle-check")
            }
            color={
              (icon = icon === "fa-triangle-exclamation" ? "crimson" : "green")
            }
            fade
            size="5x"
            style={{ animationDuration: "3s", marginBottom: "20px" }}
          />
        </div>
        <div className="body"></div>
        <div className="footer">
          <button
            onClick={() => {
              history("/");
            }}
            id="cancelBtn"
          >
            Inicio
          </button>
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            {textType}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
