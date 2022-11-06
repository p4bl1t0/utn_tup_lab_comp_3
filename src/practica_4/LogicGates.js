import { useState } from "react";

import CheckboxValue from "./CheckboxValue";
import InputValue from "./InputValue";

const LogicGates = ({ input1, checkbox }) => {
  const [select, setSelect] = useState("");
  const getSelectedValue = (event) => {
    setSelect(event.target.value);
  };

  const getLogicGateValue = () => {
    if (select === "or") {
      return input1 || checkbox;
    }
    if (select === "and") {
      return input1 && checkbox;
    }
    if (select === "nand") {
      return !input1 && !checkbox;
    }
    if (select === "nor") {
      return !input1 || !checkbox;
    }
    if (select === "xor") {
      return input1 !== checkbox;
    }
  };

  return (
    <div>
      <InputValue />
      <CheckboxValue />
      <div>
        <label for="selectGate">Compuerta lógica:</label>
        <select id="selectGate" value={select} onChange={getSelectedValue}>
          <option value="or">OR</option>
          <option value="and">AND</option>
          <option value="nand">NAND</option>
          <option value="nor">NOR</option>
          <option value="xor"> XOR</option>
        </select>
      </div>
    </div>
  );
};

export default LogicGates;
