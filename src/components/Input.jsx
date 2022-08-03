import React, { useCallback } from "react";

import { cep, currency, cpf } from "../utils/mask";

import "./Input.css";

const Input = ({ mask, prefix, ...props }) => {
  const handleKeyUp = useCallback(
    (e) => {
      if (mask === "cep") {
        cep(e);
      }
      if (mask === "currency") {
        currency(e);
      }
      if (mask === "cpf") {
        cpf(e);
      }
    },
    [mask]
  );

  return (
    <div className="input-group prefix">
      {prefix && <span className="prefix-span">{prefix}</span>}
      <input {...props} onKeyUp={handleKeyUp} />
    </div>
  );
};

export default Input;