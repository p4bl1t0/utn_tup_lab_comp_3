import { useState } from "react";

const LogicGates = ({ inputOne, inputTwo, saveResult }) => {
  const [selectedGate, setSelectedGate] = useState("AND");

  const selectGateHandler = (e) => {
    setSelectedGate(e.target.value);
  };

  const operationResult = () => {
    let result;
    switch (selectedGate) {
      case "OR":
        result = inputOne || inputTwo;
        break;
      case "AND":
        result = inputOne && inputTwo;
        break;
      case "NOR":
        result = !(inputOne || inputTwo) ? 1 : 0;
        break;
      case "NAND":
        result = !(inputOne && inputTwo) ? 1 : 0;
        break;
      case "XOR":
        result = (inputOne && !inputTwo) || (!inputOne && inputTwo) ? 1 : 0;
        break;
      default:
        break;
    }
    saveResult(result);
  };

  return (
    <div>
      <label htmlFor="selectGate">Compuerta lógica:</label>
      <select id="selectGate" onChange={selectGateHandler}>
        <option value={"OR"}>OR</option>
        <option value={"AND"}>AND</option>
        <option value={"NOR"}>NOR</option>
        <option value={"NAND"}>NAND</option>
        <option value={"XOR"}>XOR</option>
      </select>
      <button onClick={operationResult}>Calcular</button>
    </div>
  );
};

export default LogicGates;