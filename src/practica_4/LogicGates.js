import { useState } from "react";

const LogicGates = ({ inputOne, inputTwo, holdResult }) => {
  const [selectedOp, setSelectedOp] = useState("AND");

  const onSelectOp = (e) => {
    setSelectedOp(e.target.value);
  };

  const opResult = () => {
    let result;
    switch (selectedOp) {
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
    holdResult(result);
  };

  return (
    <div>
      <label htmlFor="selectOp">Compuerta lógica:</label>
      <select onChange={onSelectOp} id="selectOp">
        <option value={"OR"}>OR</option> 
        <option value={"AND"}>AND</option>
        <option value={"NOR"}>NOR</option>
        <option value={"NAND"}>NAND</option>
        <option value={"XOR"}>XOR</option> 
      </select>
      <button onClick={opResult}>Mostrar resultado</button>
    </div>
  );
};

export default LogicGates;