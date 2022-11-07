import { useState } from "react";

import LogicGates from "./Components/LogicGates";
import Input1 from "./Components/Input";
import CheckBox from "./Components/CheckBox";

const Practica4 = () => {
  const [inputValue, setInputValue] = useState(0);
  const [checkboxValue, setCheckboxValue] = useState();
  const [rangeValue, setRangeValue] = useState(0);
  const [radioValue, setRadioValue] = useState(0);
  const [output1, setOutput1] = useState(0);
  const [output2, setOutput2] = useState(0);
  const [output3, setOutput3] = useState(0);

  const InputValueHandler = (event) => {
    setInputValue(event);
  };

  const CheckboxValueHandler = (event) => {
    setCheckboxValue(event);
  };

  const RangeValueHandler = (event) => {
    setRangeValue(Number(event.target.value));
  };

  const RadioValueHandler = (event) => {
    setRadioValue(Number(event.target.value));
  };

  return (
    <div>
      <div>
        <h3>Compuerta logica 1</h3>
        <Input1 InputValue={inputValue} InputValueHandler={InputValueHandler} />
        <CheckBox setCheckBoxValue={CheckboxValueHandler} />
        <LogicGates value1={inputValue} value2={checkboxValue} output={output1} setOutput={setOutput1} />
      </div>
      <hr />
      <div>
        <h3>Compuerta logica 2</h3>
        <input type={"range"} max={1} min={0} onChange={RangeValueHandler}></input>
        <div>
          <label>0</label>
          <input type={"radio"} value={0} name="radioinput" onChange={RadioValueHandler} id="radio1"></input>
          <label>1</label>
          <input type={"radio"} value={1} name="radioinput" onChange={RadioValueHandler} id="radio2"></input>
        </div>
        <LogicGates value1={rangeValue} value2={radioValue} output={output2} setOutput={setOutput2} />
      </div>
      <hr />
      <div>
        <h3>Compuerta logica 3</h3>
        <LogicGates value1={output1} value2={output2} output={output3} setOutput={setOutput3} />
      </div>
    </div>
  );
};

export default Practica4;
