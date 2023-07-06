import { useEffect, useState } from "react";

const LogicGates = ({ inputValue, checkboxValue, result, setResult }) => {
  const [eventValue, setEventValue] = useState("");

  const selectHandler = (event) => {
    switch (event ? event.target.value : eventValue) {
      case "or":
        setResult(inputValue || checkboxValue);
        break;
      case "and":
        setResult(inputValue && checkboxValue);
        break;
      case "nand":
        setResult(!(inputValue && checkboxValue));
        break;
      case "nor":
        setResult(inputValue == checkboxValue);
        break;
      case "xor":
        setResult(inputValue !== checkboxValue);
        break;
      default:
        setResult("");
        break;
    }
     {event && setEventValue(event.target.value)} 
  };

  useEffect(() => {
    selectHandler();
  }, [inputValue, checkboxValue]);

  return (
    <div>
      <div>
        <label htmlFor="selectGate">Compuerta lógica:</label>
        <select id="selectGate" onChange={selectHandler}>
          <option value="">Seleccionar:</option>
          <option value="or">or</option>
          <option value="and">and</option>
          <option value="nand">nand</option>
          <option value="nor">nor</option>
          <option value="xor">xor</option>
        </select>
      </div>
      <div>
        <span><b>Salida: {result? 1 : 0}</b></span>
      </div>
    </div>
  );
};

export default LogicGates;
