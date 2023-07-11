import { useState, useEffect } from "react";
import LogicGates from "./components/LogicGates";

import useGates from './hooks/useGates'
import Input from "./components/Input";
import Check from "./components/Check";
import Radio from "./components/Radio";
import Range from "./components/Range";

export default function Practica4() {
  const [inputValue, setinputValue] = useState(Math.round(Math.random(10)));
  const [checkValue, setCheckValue] = useState(0);
  const [rangeValue, setRangeValue] = useState(0);
  const [radioValue, setRadioValue] = useState();
  const [select, setselect] = useState("or");
  const [result, setResult] = useState(314);

  const { getAnd, getNand, getNor, getOr, getXor } = useGates();

  useEffect(() => {
    switch (select) {
      case "or":
        setResult(getOr(inputValue, checkValue));
        break;
      case "and":
        setResult(getAnd(inputValue, checkValue));
        break;
      case "nand":
        setResult(getNand(inputValue, checkValue));
        break;
      case "nor":
        setResult(getNor(inputValue, checkValue));
        break;
      case "xor":
        setResult(getXor(inputValue, checkValue));
        break;
      default:
        break;
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checkValue, inputValue, select]);

  const handleInput = (e) => {
    const value = Number(e.target.value);
    console.log("input: " + value);
    if (value === 0 || value === 1) {
      setinputValue(value);
    } else {
      setinputValue(0);
    }
  };

  const handleRange = (e) => {
    setRangeValue(e.target.value);
    console.log(rangeValue);
  };

  const handleRadio = (e) => {
    console.log(e.target.checked)
    setRadioValue(e.target.checked)
  };

  const handleCheckbox = (e) => {
    const isChecked = e.target.checked;
    console.log("ischecked: " + checkValue);

    setCheckValue(isChecked ? 1 : 0);
  };

  const handleGates = (e) => {
    const value = e.target.value;
    console.log("gate value: " + select);
    setselect(value);
  };

  return (
    <div className="App">
      <div>
        <Input handleInput={handleInput} value={inputValue} />
        <Check handleCheckbox={handleCheckbox} />

        <div>
          <LogicGates handleGates={handleGates} />

          <span>Salida: {result}</span>
        </div>
      </div>

      <hr />
      <div>
        <Range handleRange={handleRange} rangeValue={rangeValue} />
        <Radio handleRadio={handleRadio} radioValue={radioValue} />
      </div>

      
    </div>
  );
}
