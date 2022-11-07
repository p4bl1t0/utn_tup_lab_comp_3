import { useState } from "react";
const LogicGates = ({ input1, input2, result }) => {
  const [inputSelect, setInputSelect] = useState("OR");
  const output = (input1, input2, inputSelect) => {
    let resultLogic;
    switch (inputSelect) {
      case "OR":
        resultLogic = input1 || input2 ? 1 : 0;
        break;
      case "AND":
        resultLogic = input1 && input2 ? 1 : 0;
        break;
      case "NAND":
        resultLogic = !(input1 && input2) ? 1 : 0;
        break;
      case "NOR":
        resultLogic = !(input1 || input2) ? 1 : 0;
        break;
      case "XOR":
        resultLogic = (input1 || input2) && (!input1 || !input2) ? 1 : 0;
        break;
      default:
        alert("Ocurrio algun error");
        break;
    }
    result(resultLogic);
    return resultLogic;
  };
  return (
    <div>
      <div className="logicGate">
        <label>
          Compuerta lógica:
          <select
            id="selectGate"
            value={inputSelect}
            onChange={(event) => setInputSelect(event.target.value)}
          >
            <option value={"OR"}>OR</option>
            <option value={"AND"}>AND</option>
            <option value={"NAND"}>NAND</option>
            <option value={"NOR"}>NOR</option>
            <option value={"XOR"}>XOR</option>
          </select>
        </label>
      </div>
      <div className="output">
        <span>Resultado = {output(input1, input2, inputSelect)}</span>
      </div>
    </div>
  );
};

export default LogicGates;
