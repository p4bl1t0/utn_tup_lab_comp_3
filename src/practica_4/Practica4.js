import { useState } from "react";

import LogicCheckbox from "./components/LogicCheckbox";
import LogicGate from "./components/LogicGate";
import LogicInput from "./components/LogicInput";
import LogicRange from "./components/LogicRange";
import LogicRadio from "./components/LogicRadio";

export default function Practica4() {
  const [rangeValue, setRangeValue] = useState(0);
  const [radioValue, setRadioValue] = useState(0);
  const [inputValue, setInputValue] = useState(0);
  const [checkboxValue, setCheckboxValue] = useState(0);

  const [result1, setResult1] = useState("");
  const [result2, setResult2] = useState("");
  const [result3, setResult3] = useState("");

  const checkboxValueHandler = (event) => {
    event.target.checked === true ? setCheckboxValue(1) : setCheckboxValue(0);
  };

  const radioValueHandler = (event) => {
    parseInt(event.target.value) === 1 ? setRadioValue(1) : setRadioValue(0);
  };

  const inputValueHandler = (event) => {
    parseInt(event.target.value) === 1 ? setInputValue(1) : setInputValue(0);
  };

  const rangeValueHandler = (event) => {
    parseInt(event.target.value) === 1 ? setRangeValue(1) : setRangeValue(0);
  };

  const saveResult1Handler = (res) => {
    setResult1(res);
  };

  const saveResult3Handler = (res) => {
    setResult3(res);
  };

  const saveResult2Handler = (res) => {
    setResult2(res);
  };

  return (
    <section>
      <div>
        <LogicInput saveInput={inputValueHandler} />
        <LogicCheckbox saveCheckbox={checkboxValueHandler} />
        <LogicGate
          input1={inputValue}
          input2={checkboxValue}
          saveResult={saveResult1Handler}
        />
        <span>Salida: {result1}</span>
      </div>
      <div>
        <LogicRange saveRange={rangeValueHandler} />
        <LogicRadio saveRadio={radioValueHandler} />
        <LogicGate
          input1={rangeValue}
          input2={radioValue}
          saveResult={saveResult2Handler}
        />
        <span>Salida: {result2}</span>
      </div>
      <div>
        <LogicGate
          input1={result1}
          input2={result2}
          saveResult={saveResult3Handler}
        />
        <span>Resultado acumulado: {result3}</span>
      </div>
    </section>
  );
}
