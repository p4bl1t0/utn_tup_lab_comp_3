import { useState } from "react";

const LogicGate = ({ input1, input2, setResult }) => {
  const [logicGate, setLogicGate] = useState();

  const logicGateHandler = (event) => {
    let aux = event.target.value;

    switch (aux) {
      case "OR":
        setLogicGate(Boolean(input1 || input2).toString());
        break;
      case "AND":
        setLogicGate(Boolean(input1 && input2).toString());
        break;
      case "NAND":
        setLogicGate(Boolean(!(input1 && input2)).toString());
        break;
      case "NOR":
        setLogicGate(Boolean(!(input1 || input2)).toString());
        break;
      case "XOR":
        setLogicGate(
          Boolean((input1 && !input2) || (!input1 && input2)).toString()
        );
        break;
    }
    setResult(logicGate);
  };

  return (
    <div>
      <p>Seleccione la compuerta lógica:</p>
      <select onChange={logicGateHandler}>
        <option disabled selected>
          Select Gate
        </option>
        <option value="OR">OR</option>
        <option value="AND">AND</option>
        <option value="NAND">NAND</option>
        <option value="NOR">NOR</option>
        <option value="XOR">XOR</option>
      </select>
      <h3>Resultado: {logicGate}</h3>
    </div>
  );
};
export default LogicGate;
