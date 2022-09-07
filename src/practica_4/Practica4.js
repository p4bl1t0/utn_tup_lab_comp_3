import { useState } from "react";
import LogicCheckbox from "./components/LogicCheckbox/LogicCheckbox";

import LogicGate from "./components/LogicGate/LogicGate";
import LogicInput from "./components/LogicInput/LogicInput";

export default function Practica4() {
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
      <LogicInput saveInput={inputValueHandler} />
      <LogicCheckbox saveCheckbox={checkboxValueHandler} />
      <LogicGate
        input1={inputValue}
        input2={checkboxValue}
        saveResult={saveResultHandler}
      />
      <div>
        <span>Salida: {result}</span>
      </div>
    </div>
  );
}
