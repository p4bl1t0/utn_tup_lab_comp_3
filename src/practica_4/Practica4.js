import { useState, useRef } from "react";
import RadioGates from "./RadioGates";
import RangeGates from "./RangeGates";
import InputGates from "./InputGates";
import CheckboxGates from "./CheckboxGates";
import LogicGates from "./LogicGates";

export default function Practica4() {
  const inputRef = useRef();
  const [textInput, setTextInput] = useState(Math.round(Math.random()));
  const [checkboxInput, setCheckboxInput] = useState(0);
  const [result, setResult] = useState("");

  const inputHandler = (value) => {
    setTextInput(value === "1" ? 1 : 0);
  };

  const checkboxHandler = (e) => {
    setCheckboxInput(e.target.checked ? 1 : 0);
  };

  const HandlerResult = (r) => {
    setResult(r);
  };

  return (
    <div className="App">
      <InputGates gateInput={inputHandler} />
      <CheckboxGates checkBox={checkboxHandler} />
      <LogicGates
        input1={textInput}
        input2={checkboxInput}
        logicResult={HandlerResult}
      />
      <div>
        <label for="input1">Entrada 1:</label>
        <input type="number" id="input1" onChange={inputHandler} />
      </div>
      <div>
        <label>
          <input type="checkbox" onChange={checkboxHandler} /> Entrada 2
        </label>
      </div>
      <div>
        <LogicGate
          input1={textInput}
          input2={checkboxInput}
          saveResult={HandlerResult}
        />
        <div>
          <span>Salida: {result}</span>
        </div>
      </div>
    </div>
  );
}
