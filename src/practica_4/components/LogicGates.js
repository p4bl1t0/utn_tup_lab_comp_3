import { useState } from "react";

const LogicGates = ({ input, checkbox }) => {
  const [select, setSelect] = useState("");

  const getSelectedHandler = (event) => {
    setSelect(event.target.value);
  };

  const getLogicGateHandler = () => {
    if (select === "or") {
      return input || checkbox;
    }
    if (select === "and") {
      return input && checkbox;
    }
    if (select === "nand") {
      return !(input && !checkbox);
    }
    if (select === "nor") {
      return !(input || !checkbox);
    }
    if (select === "xor") {
      return (!input && checkbox) || (input && !checkbox);
    }
  };

  return (
    <div>
      <div>
        <label for="selectGate">Compuerta lógica:</label>
        <select id="selectGate" value={select} onChange={getSelectedHandler}>
          <option>Select gate</option>
          <option value="or">OR</option>
          <option value="and">AND</option>
          <option value="nand">NAND</option>
          <option value="nor">NOR</option>
          <option value="xor"> XOR</option>
        </select>
      </div>
      <span>Salida: {getLogicGateHandler}</span>
    </div>
  );
};

export default LogicGates;
