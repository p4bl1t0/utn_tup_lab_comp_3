import { useState, useRef } from "react";
import CheckInput from "./CheckInput";
import LogicGates from "./LogicGates";
import TextInput from "./TextInput";
import RadioInput from "./RadioInput";
import RangeInput from "./RangeInput";

export default function Practica4() {
  const inputRef = useRef();
  const [textInput, setTextInput] = useState(Math.round(Math.random()));
  const [checkboxInput, setCheckboxInput] = useState(0);
  const [rangeInput, setRangeInput] = useState(0);
  const [radioInput, setRadioInput] = useState(0);

  const inputHandler = (value) => {
    setTextInput(value === "1" ? 1 : 0);
  };

  const checkboxHandler = (e) => {
    setCheckboxInput(e.target.checked ? 1 : 0);
  };

  return (
    <div className="App">
      <div>
        <label for="input 1"> Entrada 1: </label>
        <TextInput onChange={inputHandler} />
      </div>
      <div>
        <label type="checkbox">
          Entrada 2:
          <CheckInput onChange={checkboxHandler} />
        </label>
      </div>
      <div>
        <label type="range">
          <RangeInput value={rangeInput} onChange={setRangeInput} />
        </label>
      </div>
      <div>
        <label type="range">
          <RadioInput value={radioInput} onChange={setRadioInput} />
        </label>
      </div>
      <div>
        <LogicGates
          for="selectGate"
          inputOne={textInput}
          inputTwo={checkboxInput}
        />
      </div>
      <div>
        <span>Salida: {inputRef}</span>
      </div>
    </div>
  );
}
