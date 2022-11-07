import { useEffect, useState } from "react";

const LogicGate = ({ input1, input2 }) => {
  const [logicGate, setLogicGate] = useState();

  // useEffect(input1.value).onChange(logicGateHandler());

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
  };
  //logicGate.onChange ? { logicGateHandler } : "";

  return (
    <div>
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
      <h3>{logicGate}</h3>
    </div>
  );
};
export default LogicGate;
