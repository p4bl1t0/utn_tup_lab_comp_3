import { useRef, useState } from "react";

import LogicGate from "./components/LogicGate/LogicGate";

export default function Practica4() {
  const inputRef = useRef();
  const [inputValue, setInputValue] = useState(0);
  const [checkboxValue, setCheckboxValue] = useState(0);
  const [result, setResult] = useState("");

  const inputValueHandler = (event) => {
    parseInt(event.target.value) === 1 ? setInputValue(1) : setInputValue(0);
  };

  const checkboxValueHandler = (event) => {
    event.target.checked === true ? setCheckboxValue(1) : setCheckboxValue(0);
  };

  const saveResultHandler = (res) => {
    setResult(res);
  };

  return (
    <div className="App">
      <div>
        <label for="input1">Entrada 1:</label>
        <input type="number" id="input1" onChange={inputValueHandler} />
      </div>
      <div>
        <label>
          <input type="checkbox" onChange={checkboxValueHandler} /> Entrada 2
        </label>
      </div>
      <div>
        <LogicGate input1={inputValue} input2={checkboxValue} saveResult={saveResultHandler}/>
        <div>
          <span>Salida: {result}</span>
        </div>
      </div>
    </div>
  );
}
