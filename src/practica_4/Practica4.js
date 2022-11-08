import { useState } from "react";
import Checkbox from "./Checkbox";
import Input from "./Input";
import LogicGate from "./LogicGate";

import "./Practica4.css";

export default function Practica4() {
  const initialValue = Math.round(Math.random());
  const [input1Value, setInput1Value] = useState(initialValue);
  const [checkboxValue, setCheckboxValue] = useState(0);
  const [radioValue, setRadioValue] = useState(0);
  const [logicGate1, setLogicGate1] = useState(0);
  const [logicGate2, setLogicGate2] = useState(0);

  const [rangeValue, setRangeValue] = useState(0);

  const rangeValueHandler = (event) => {
    const value = event.target.value;
    setRangeValue(parseInt(value));
  };

  const radioValueHandler = (event) => {
    const value = event.target.value;
    setRadioValue(parseInt(value));
  };

  const logic1ResultShower = (value) => {
    setLogicGate1(value);
  };

  const logic2ResultShower = (value) => {
    setLogicGate2(value);
  };

  const logic3ResultShower = (value) => {
    console.log("1:", logicGate1, " 2:", logicGate2, " =", value);
  };

  return (
    <>
      <div>
        <h4>Calculo 1</h4>
        <Input input1Value={input1Value} setInput1Value={setInput1Value} />
        <Checkbox
          checkboxValue={checkboxValue}
          setCheckboxValue={setCheckboxValue}
        />
        <LogicGate
          value1={input1Value}
          value2={checkboxValue}
          logicResultShower={logic1ResultShower}
        />
      </div>
      <div className="border-top">
        <h4>Calculo 2</h4>
        <label>Valor 1:</label>
        <input
          type="range"
          max={1}
          min={0}
          value={rangeValue}
          onChange={rangeValueHandler}
        />
        <form onChange={radioValueHandler}>
          <label>Valor 2: </label>
          <br />
          <label>0: </label>
          <input type="radio" value={0} name="radio" />
          <br />
          <label>1: </label>
          <input type="radio" value={1} name="radio" />
        </form>
        <LogicGate
          value1={rangeValue}
          value2={radioValue}
          logicResultShower={logic2ResultShower}
        />
      </div>
      <div className="border-top">
        <h4>Calculo 3</h4>
        <LogicGate
          value1={logicGate1}
          value2={logicGate2}
          logicResultShower={logic3ResultShower}
        />
      </div>
    </>
  );
}
