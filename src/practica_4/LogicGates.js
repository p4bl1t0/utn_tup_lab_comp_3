import { useState, useEffect } from "react";

const LogicGates = ({ inputOne, inputTwo }) => {
  const [selectInput, setSelectInput] = useState("or");
  const [output, setOutput] = useState(false);

  useEffect(() => {
    switch (selectInput) {
      case "or":
        setOutput(inputOne || inputTwo);
        break;
      case "and":
        setOutput(inputOne && inputTwo);
        break;
      case "nand":
        setOutput(!(inputOne && inputTwo));
        break;
      case "nor":
        setOutput(!(inputOne || inputTwo));
        break;
      case "xor":
        setOutput(inputOne !== inputTwo);
        break;
      default:
        console.log("Seleccione una puerta logica: ");
        break;
    }
  }, [inputOne, inputTwo, selectInput]);

  const selectChangeHandler = (e) => {
    setSelectInput(e.target.value);
  };

  return (
    <div>
      <div>
        <label htmlFor="selectGate">Compuerta lógica:</label>
        <select
          onChange={selectChangeHandler}
          id="selectGate"
          value={selectInput}
        >
          <option value="or">Or</option>
          <option value="and">And</option>
          <option value="nand">Nand</option>
          <option value="nor">Nor</option>
          <option value="xor">Xor</option>
        </select>
      </div>
      <div>
        <span>Salida: {output ? "Verdadero" : "Falso"}</span>
      </div>

      {output ? (
        <div>
          <span className="verdadero">Salida: Verdadero</span>
        </div>
      ) : (
        <div>
          <span className="falso">Salida: Falso</span>
        </div>
      )}
    </div>
  );
};

export default LogicGates;
