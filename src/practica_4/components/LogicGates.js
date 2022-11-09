import { useState } from "react";

const LogicGates = ({ input, checkbox, setOutput }) => {
  const [selected, setSelected] = useState();

  const logicGatesHandler = (event) => {
    let selectValue = event.target.value;

    switch (selectValue) {
      case "or":
        setSelected(Boolean(input || checkbox).toString());
        break;
      case "and":
        setSelected(Boolean(input && checkbox).toString());
        break;
      case "nand":
        setSelected(Boolean(!(input && checkbox)).toString());
        break;
      case "nor":
        setSelected(Boolean(!(input || checkbox)).toString());
        break;
      case "xor":
        setSelected(
          Boolean((input && !checkbox) || (!input && checkbox)).toString()
        );
        break;
      default:
        break;
    }
    setOutput(selected);
  };

  return (
    <div>
      <div>
        <label for="selectGate">Compuerta lógica:</label>
        <select id="selectGate" onChange={logicGatesHandler}>
          <option>Select gate</option>
          <option value="or">OR</option>
          <option value="and">AND</option>
          <option value="nand">NAND</option>
          <option value="nor">NOR</option>
          <option value="xor"> XOR</option>
        </select>
      </div>
      <div>
        <span>Salida: {selected}</span>
      </div>
    </div>
  );
};

export default LogicGates;
