import { useState } from "react";

import LogicGates from "./LogicGates";
import InputOne from "./Inputs/InputOne";
import Checkbox from "./Inputs/Checkbox";
import Range from "./Inputs/Range";
import Radio from "./Inputs/Radio";


export default function Practica4() {
  const randomValue = Math.round(Math.random());
  const [inputOneValue, setInputOneValue] = useState(randomValue);

  const [checkboxValue, setCheckboxValue] = useState(false);

  const [rangeValue, setRangeValue] = useState(0);

  const [radioValue, setRadioValue] = useState(0);

  const [firstResult, setFirstResult] = useState("");
  const [secondResult, setSecondResult] = useState("");
  const [thirdResult, setThirdResult] = useState("");

  const inputValueHandler = (e) => {
    parseInt(e.target.value) === 1 ? setInputOneValue(1) : setInputOneValue(0);
  };

  const checkboxValueHandler = (e) => {
    e.target.checked === true ? setCheckboxValue(1) : setCheckboxValue(0);
  };

  const rangeValueHandler = (e) => {
    parseInt(e.target.value) === 1 ? setRangeValue(1) : setRangeValue(0);
  };

  const radioValueHandler = (e) => {
    parseInt(e.target.value) === 1 ? setRadioValue(1) : setRadioValue(0);
  };



  const holdFirstResult = (result) => { 
    setFirstResult(result);
  };

  const holdSecondResult = (result) => {
    setSecondResult(result);
  };

  const holdThirdResult = (result) => {
    setThirdResult(result);
  };

  return (
    <div> 
      <div>
        <InputOne holdInputValue={inputValueHandler}/>
        <Checkbox holdCheckboxValue={checkboxValueHandler}/> 
        <LogicGates inputOne={inputOneValue} inputTwo={checkboxValue} holdResult={holdFirstResult}/>
        <p>Salida: {firstResult}</p> 
      </div>
      <div>
        <Range holdRangeValue={rangeValueHandler} />
        <Radio holdRadioValue={radioValueHandler} />
        <LogicGates inputOne={rangeValue} inputTwo={radioValue} holdResult={holdSecondResult}/>
        <p>Salida: {secondResult}</p>
      </div>
      <div>
        <LogicGates inputOne={firstResult} inputTwo={secondResult} holdResult={holdThirdResult}/>
        <p>Resultado final entre ambas logicGates: {thirdResult}</p>
      </div>
    </div>
  );
}