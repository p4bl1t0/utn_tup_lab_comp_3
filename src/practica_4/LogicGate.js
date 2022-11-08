import React from "react";
import { useState, useEffect } from "react";

const LogicGate = ({ value1, value2, logicResultShower }) => {
  const [result, setResult] = useState();
  const [selectValue, setSelectValue] = useState("default");

  useEffect(() => {
    const calculator = () => {
      let response = 0;
      switch (selectValue) {
        case "or":
          response = value1 || value2;
          setResult(response);
          break;
        case "and":
          response = value1 && value2;
          setResult(response);
          break;
        case "nand":
          response = value1 && value2;
          response ? setResult(0) : setResult(1);
          break;
        case "nor":
          response = value1 || value2;
          response ? setResult(0) : setResult(1);
          break;
        case "xor":
          response = value1 === value2;
          response ? setResult(0) : setResult(1);
          break;
        default:
          return <p>Seleccione un operador lógico</p>;
      }
    };
    calculator();
  }, [value1, value2, selectValue]);

  const handlerSelect = (event) => {
    setSelectValue(event.target.value);
  };
  logicResultShower(result);
  return (
    <>
      <div>
        <label for="logic-gate">Compuerta lógica: </label>
        <select id="logic-gate" onChange={handlerSelect}>
          <option value="default">Seleccione un operador</option>
          <option value="or">OR</option>
          <option value="and">AND</option>
          <option value="nand">NAND</option>
          <option value="nor">NOR</option>
          <option value="xor">XOR</option>
        </select>
      </div>
      <div>
        <h4>Resultados:</h4>
        {selectValue === "default" ? (
          <p>Seleccione un operador lógico</p>
        ) : (
          <p>
            {value1} {selectValue} {value2} = {result}
          </p>
        )}
      </div>
    </>
  );
};

export default LogicGate;
