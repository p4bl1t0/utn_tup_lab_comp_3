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

  const [resultOne, setResultOne] = useState("");
  const [resultTwo, setResultTwo] = useState("");
  const [resultThree, setResultThree] = useState("");

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

  const saveFirstResult = (result) => {
    setResultOne(result);
  };

  const saveSecondResult = (result) => {
    setResultTwo(result);
  };

  const saveThirdResult = (result) => {
    setResultThree(result);
  };

  return (
    <section>
      <div>
        <InputOne saveInputValue={inputValueHandler}/>
        <Checkbox saveCheckbox={checkboxValueHandler}/>
        <LogicGates
          inputOne={inputOneValue}
          inputTwo={checkboxValue}
          saveResult={saveFirstResult}
        />
        <span>Salida: {resultOne}</span>
      </div>
      <div>
        <Range saveRange={rangeValueHandler} />
        <Radio saveRadio={radioValueHandler} />
        <LogicGates
          inputOne={rangeValue}
          inputTwo={radioValue}
          saveResult={saveSecondResult}
        />
        <span>Salida: {resultTwo}</span>
      </div>
      <div>
        <LogicGates
          inputOne={resultOne}
          inputTwo={resultTwo}
          saveResult={saveThirdResult}
        />
        <span>Salida final entre ambas logicGates: {resultThree}</span>
      </div>
    </section>
  );
}