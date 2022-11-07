import { useState } from "react";

const LogicGates = ({ inputOne, inputTwo, logicResult }) => {
  const [selectInput, setSelectInput] = useState("or");

  const selectInputHandler = (e) => {
    setSelectInput(e.target.value);
  };

  const resultHandler = () => {
    let result;

    switch (selectInput) {
      case "or":
        result = inputOne || inputTwo;
        break;
      case "and":
        result = inputOne && inputTwo;
        break;
      case "nand":
        result = !(inputOne && inputTwo);
        break;
      case "nor":
        result = !(inputOne || inputTwo);
        break;
      case "xor":
        result = (inputOne && !inputTwo) || (!inputOne && inputTwo) ? 1 : 0;
        break;
      default:
        break;
    }
    logicResult(result);
  };

  return (
    <div>
      <label htmlFor="selectGate">Compuerta lógica:</label>
      <select id="selectGate" onChange={selectInputHandler}>
        <option value={"or"}>OR</option>
        <option value={"and"}>AND</option>
        <option value={"nand"}>NAND</option>
        <option value={"nor"}>NOR</option>
        <option value={"xor"}>XOR</option>
      </select>
      <button onClick={resultHandler}>Calcular</button>
    </div>
  );
};

export default LogicGates;
