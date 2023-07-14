import { useState } from "react";
import LogicGates from "./components/LogicGates";
import Check from "./components/Check";

import Input from "./components/Input";

export default function Practica4() {
  const [inputValue, setInputValue] = useState("0");
  const [checkboxValue, setCheckboxValue] = useState(0);
  const [result, setResult] = useState("0");
  const [firstResult, setFirstResult] = useState("0");
  const [secondResult, setSecondResult] = useState("0");
  const [thirdResult, setThirdResult] = useState("0");
  const [inputValue2, setInputValue2] = useState("0");
  const [inputValue3, setInputValue3] = useState("0");

  const handlerChangeInput = (e) => {
    const value1 = e.target.value;
    setInputValue(value1);
  };

  const handlerBlur = (e) => {
    const value1 = Number(e.target.value);
    if (value1 === 1 || value1 === 0) {
      setInputValue(value1);
      setInputValue(value1.toString());
    } else {
      setInputValue(0);
      setInputValue("0");
    }
  };

  const handlerChangeInput2 = (e) => {
    const value2 = e.target.value;
    setInputValue2(value2);
  };

  const handlerChangeInput3 = (e) => {
    const value3 = e.target.value;
    setInputValue3(value3);
  };

  return (
    <div className="App">
      <h3>Calcular resultado de entrada 1 y 2</h3>
      <div>
        <Input
          inputValue={inputValue}
          handleChangeInput={handlerChangeInput}
          handleBlur={handlerBlur}
        />
      </div>

      <div>
        <LogicGates
          setResult={setFirstResult}
          inputValue={inputValue}
          checkboxValue={checkboxValue}
        />
      </div>
      <h2>Output: {firstResult}</h2>
      <h1>Calculate 1 and 2</h1>
      <div>
        <label htmlFor="input2">input 2:</label>
        <input
          id="input2"
          type="range"
          min="0"
          max="1"
          step="1"
          value={inputValue2}
          onChange={handlerChangeInput2}
        />
      </div>
      <div>
        <label htmlFor="input1">OUT1:</label>
        <label htmlFor="input3">OUT3:</label>
        <input
          id="input3"
          type="radio"
          name="input3"
          value="0"
          checked={inputValue3 === "0"}
          onChange={handlerChangeInput3}
        />
        <label htmlFor="input1">0</label>
        <input
          type="number"
          id="input1"
          value={inputValue}
          onChange={handlerChangeInput}
          onBlur={handlerBlur}
          checked={inputValue3 === "1"}
        />
        <label htmlFor="input3-1">1</label>
      </div>
      <div>
        <Check></Check>
      </div>
      <div>
        <LogicGates
          setResult={setSecondResult}
          inputValue={inputValue2}
          checkboxValue={inputValue3}
        />
      </div>
      <h2>OUT {secondResult}</h2>
      <h2>OUT: {thirdResult}</h2>
      <div>
        <h2>OUT: {result}</h2>
      </div>
    </div>
  );
}
