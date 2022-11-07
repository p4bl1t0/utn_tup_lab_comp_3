import { useState } from "react";
import Checkbox from "./components/Checkbox";
import Input1 from "./components/Input1";
import InputRadio from "./components/InputRadio.js";
import InputRange from "./components/InputRange";
import LogicGates from "./components/LogicGates";
import "./Practica4.css";

export default function Practica4() {
  const valueRandom = Math.round(Math.random());
  const [input1Value, setInput1Value] = useState(valueRandom);
  const [inputCheckbox, setInputCheckbox] = useState(0);
  const [inputRange, setInputRange] = useState(0);
  const [inputRadio, setInputRadio] = useState(0);
  const [resultLogicGates1, setResultLogicGates1] = useState();
  const [resultLogicGates2, setResultLogicGates2] = useState();
  //eslint-disable-next-line
  const [resultLogicGatesTotal, setresultLogicGatesTotal] = useState();
  
  return (
    <div className="sectionCards">
      <section className="card">
        <h2>Cálculo 1:</h2>
        <Input1 input1Value={input1Value} setInput1Value={setInput1Value} />
        <Checkbox
          inputCheckbox={inputCheckbox}
          setInputCheckbox={setInputCheckbox}
        />
        <LogicGates
          input1={input1Value}
          input2={inputCheckbox}
          result={setResultLogicGates1}
        />
      </section>
      <section className="card">
        <h2>Cálculo 2:</h2>
        <InputRange inputRange={inputRange} setInputRange={setInputRange} />
        <InputRadio inputRadio={inputRadio} setInputRadio={setInputRadio} />
        <LogicGates
          input1={inputRange}
          input2={inputRadio}
          result={setResultLogicGates2}
        />
      </section>
      <section className="card">
        <h2>Cálculo con las dos primeras salidas: </h2>
        <LogicGates
          input1={resultLogicGates1}
          input2={resultLogicGates2}
          result={setresultLogicGatesTotal}
        />
      </section>
    </div>
  );
}
