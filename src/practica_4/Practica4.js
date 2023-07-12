import React, { useState } from "react";
import LogicGates from "./components/LogicGates";
import Input from "./components/Input";
import Checkbox from "./components/Checkbox";

export default function Practica4() {
  const [inputValue, setInputValue] = useState("0");
  const [checkboxValue, setCheckboxValue] = useState(0);
  const [inputValue2, setInputValue2] = useState("0");
  const [inputValue3, setInputValue3] = useState("0");
  const [firstResult, setFirstResult] = useState("0");
  const [secondResult, setSecondResult] = useState("0");
  const [thirdResult, setThirdResult] = useState("0");

  const handleChangeInput = (e) => {
    const value1 = e.target.value;
    setInputValue(value1);
  };

  const handleBlur = (e) => {
    const value1 = parseInt(e.target.value);
    if (value1 === 1 || value1 === 0) {
      setInputValue(value1.toString());
    } else {
      setInputValue("0");
    }
  };

  const handleChangeCheckBox = (e) => {
    const check = e.target.checked;
    if (check === true) {
      setCheckboxValue(1);
    } else {
      setCheckboxValue(0);
    }
  };

  const handleChangeInput2 = (e) => {
    const value2 = e.target.value;
    setInputValue2(value2);
  };

  const handleChangeInput3 = (e) => {
    const value3 = e.target.value;
    setInputValue3(value3);
  };

  return (
    <div className="App">
      <h3>Calcular resultado de entrada 1 y 2</h3>
      <div>
        <Input
          inputValue={inputValue}
          handleChangeInput={handleChangeInput}
          handleBlur={handleBlur}
        />
      </div>
      <div>
        <Checkbox
          checkboxValue={checkboxValue}
          handleChangeCheckBox={handleChangeCheckBox}
        />
      </div>
      <div>
        <LogicGates
          setResult={setFirstResult}
          firstInput={inputValue}
          secondInput={checkboxValue}
        />
      </div>
      <span>Salida: {firstResult}</span>
      <h3>Calcular Resultado de la entrada 3 y 4</h3>
      <div>
        <label htmlFor="input2">Entrada 3:</label>
        <input
          id="input2"
          type="range"
          min="0"
          max="1"
          step="1"
          value={inputValue2}
          onChange={handleChangeInput2}
        />
      </div>
      <div>
        <label htmlFor="input3">Entrada 4:</label>
        <input
          id="input3"
          type="radio"
          name="input3"
          value="0"
          checked={inputValue3 === "0"}
          onChange={handleChangeInput3}
        />
        <label htmlFor="input3-0">0</label>
        <input
          id="input3-1"
          type="radio"
          name="input3"
          value="1"
          checked={inputValue3 === "1"}
          onChange={handleChangeInput3}
        />
        <label htmlFor="input3-1">1</label>
      </div>
      <div>
        <LogicGates
          setResult={setSecondResult}
          firstInput={inputValue2}
          secondInput={inputValue3}
        />
      </div>
      <span>Salida: {secondResult}</span>
      <div>
        <h3>Calcular resultado de las 4 entradas</h3>
        <LogicGates
          setResult={setThirdResult}
          firstInput={firstResult}
          secondInput={secondResult}
        />
      </div>
      <div>
        <span>Salida: {thirdResult}</span>
      </div>
    </div>
  );
}
