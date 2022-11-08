import { useState } from "react";

import "./Practica4.css"

import Checkbox from "./components/Checkbox";
import LogicGate from "./components/LogicGate";
import Input from "./components/Input";

export default function Practica4() {
  const [inputValue, setInputValue] = useState(0);
  const [checkboxValue, setCheckboxValue] = useState(0);
  const [rangeValue, setRangeValue] = useState(1);
  const [radioValue, setRadioValue] = useState(0);
  const [takeResult1, SetTakeResult1] = useState(0);
  const [takeResult2, SetTakeResult2] = useState(0);

  const takeResult1Handler = (value) => {
    SetTakeResult1(value)
    console.clear()
    console.log("INPUT: " + inputValue) 
    console.log("CHECK-BOX: " + checkboxValue + " \n" )
    console.log("Total 1: " + value)  
    } 

  const takeResult2Handler = (value) => {
    SetTakeResult2(value)
    console.log("RANGE: " + rangeValue)
    console.log("RADIO: " + radioValue)
    console.log("Total 2: " + value)

  }  
  const   takeResult3Handler  = (value) => {
    console.log("\nVALOR FINAL: " + value)

  }  
  const changeValueRange = (e) => {  e.target.value === "1" ? setRangeValue(1) : setRangeValue(0) }

  const changeValueRadio = (e) => { e.target.value === "1"  ? setRadioValue(1) : setRadioValue(0) }

  return (
    <>

      <div  className="result1">
        <Input inputValue={inputValue} setInputValue={setInputValue} />
        <Checkbox setCheckboxValue={setCheckboxValue} />
        <LogicGate resultinput1={inputValue} resultinput2={checkboxValue} takeResultHandler={takeResult1Handler} />
      </div>

      <div  className="result2">
      <label> 0 </label>
      <input className="range" type="range" min={0} max={1} onChange={changeValueRange} />
      <label className="numberRange"> 1 </label>

      <form onChange={changeValueRadio}>
        <label className="numberRadio">0</label>  
        <input name="radio" type="radio"  value={0}  />
        <label>1</label>  
        <input name="radio" type="radio" value={1} />
      </form>

        <LogicGate resultinput1={rangeValue} resultinput2={radioValue} takeResultHandler={takeResult2Handler} />
      </div>

      <div className="result3">
         <LogicGate resultinput1={takeResult1} resultinput2={takeResult2} takeResultHandler={takeResult3Handler} /> 
      </div>

    </>
  );
}
