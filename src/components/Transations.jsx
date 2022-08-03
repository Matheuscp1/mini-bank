import "./Transations.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    faMoneyCheckDollar
} from "@fortawesome/free-solid-svg-icons";
const Transations = (props) => {
  return (
    <div className="menu-container">
      <div className="header-img">
        <div className="overlay"></div>
        <div className="balance">
          <h1>Saldo</h1>
          <div>
          <FontAwesomeIcon icon={faMoneyCheckDollar} size="1x" color="white" />
   
          </div>
        </div>
      </div>

      <ul className="list">
        <li className="item">
          <a href="#">Teste 1</a>
          <p>R$17,50</p>
        </li>
        <li className="item">
          <a href="#">Teste 2</a>
          <p>R$33,77</p>
        </li>
        <li className="item">
          <a href="#">Teste 3</a>
          <p>R$220,88</p>
        </li>
        <li className="item">
          <a href="#">Teste 4</a>
          <p>R$14,09</p>
        </li>

        <li className="item">
          <a href="#">Teste 4</a>
          <p>R$14,09</p>
        </li>

      </ul>
    </div>
  );
};

export default Transations;
