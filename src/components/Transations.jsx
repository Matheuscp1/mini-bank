import "./Transations.css";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyCheckDollar } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useParams } from "react-router-dom";
import api from "../services/api";

const Transations = (props) => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const [saldoTotal, setSaldo] = useState(0);
  const history = useNavigate();
  useEffect(() => {
    if (id) {
      const getExtracts = async () => {
        let reponse = await api.get(`/${id}`);
        setData(reponse.data);
      };
      getExtracts();
    } else {
      const getAccounts = async () => {
        let reponse = await api.get();
        setData(reponse.data);
      };
      getAccounts();
    }

    console.log(id);
  }, [id]);

  return (
    <div className="menu-container">
      <div className="header-img">
        <div className="overlay"></div>
        <div className="balance">
          <h1>{id ? "Extratos" : "Contas"}</h1>
          <div>
            {id ? (
              <span>
                Saldo{" "}
                {saldoTotal.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </span>
            ) : (
              <FontAwesomeIcon
                icon={faMoneyCheckDollar}
                size="1x"
                color="white"
              />
            )}
          </div>
        </div>
      </div>
      {id
        ? data?.map((element) => {
            let date = new Date(element.createdDate).toLocaleDateString(
              "pt-br",
              {
                minute: "2-digit",
                hour: "2-digit",
              }
            );
            console.log("data", date);
            let saldo = +element.amount;
            return (
              <ul className="list" key={element.id}>
                <li className="item">
                  {date} - {element.type}
                  <p>
                    {saldo.toLocaleString("pt-br", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </p>
                </li>
              </ul>
            );
          })
        : data?.map((element) => {
            let saldo = +element.amount;
            return (
              <ul className="list" key={element.id}>
                <li className="item">
                  <div>
                    <span>Conta:</span> {element.cpf}
                    <button
                      className="btnExtract"
                      type="button"
                      onClick={() => {
                        setSaldo(saldo);
                        history(`/${element.id}`);
                        console.log(saldo);
                      }}
                    >
                      Ver extrato
                    </button>
                  </div>

                  <p>
                    {saldo.toLocaleString("pt-br", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </p>
                </li>
              </ul>
            );
          })}
    </div>
  );
};

export default Transations;
