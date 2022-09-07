import { useState } from "react";

const LogicGate = ({ input1, input2, saveResult }) => {
  const [selectedGate, setSelectedGate] = useState("or");

  const selectGateHandler = (event) => {
    setSelectedGate(event.target.value);
  };

  const operationResult = () => {
    let result;

    switch (selectedGate) {
      case "or":
        result = input1 || input2;
        break;
      case "and":
        result = input1 && input2;
        break;
      case "nand":
        result = !(input1 && input2) ? 1 : 0;
        break;
      case "nor":
        result = !(input1 || input2) ? 1 : 0;
        break;
      case "xor":
        result = (input1 && !input2) || (!input1 && input2) ? 1 : 0;
        break;
      default:
        break;
    }

    saveResult(result);
  };

  return (
    <>
      <label for="selectGate">Compuerta lógica:</label>
      <select id="selectGate" onChange={selectGateHandler}>
        <option value={"or"}>OR</option>
        <option value={"and"}>AND</option>
        <option value={"nand"}>NAND</option>
        <option value={"nor"}>NOR</option>
        <option value={"xor"}>XOR</option>
      </select>
      <button onClick={operationResult}>Calcular</button>
    </>
  );
};

export default LogicGate;
