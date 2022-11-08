import { useState } from "react";
import Input1 from "./components/Input1";
import Input2 from "./components/Input2";
import LogicGate from "./components/LogicGate";
import "./styles.css";

export default function Practica4() {
  const [input1, setInput1] = useState(0);
  const valueInput1 = (args) => {
    setInput1(args);
  };

  const [input2, setInput2] = useState(0);
  const valueInput2 = (args) => {
    setInput2(args);
  };

  const [radioInput, setRadioInput] = useState(0);
  const radioHandler = (event) => {
    setRadioInput(event.target.value);
  };

  const [rangeInput, setRangeInput] = useState(0);
  const rangeHandler = (event) => {
    setRangeInput(event.target.value);
  };

  const [result1, setResult1] = useState();
  const [result2, setResult2] = useState();
  const [result3, setResult3] = useState();

  const saveResult1 = (res) => {
    setResult1(res);
  };
  const saveResult2 = (res) => {
    setResult2(res);
  };
  const saveResult3 = (res) => {
    setResult3(res);
  };

  return (
    <div className="main">
      <h3>Práctica 4</h3>
      <div>
        <label>Entrada 1: </label>
        <span>{input1 == 0 ? "false" : "true"}</span>
        <Input1 valueInput1={valueInput1} />
      </div>

      <div>
        <label>Entrada 2: </label>
        <span>{input2 == 0 ? "false" : "true"}</span>
        <Input2 valueInput2={valueInput2} />
      </div>
      <div className="new-inputs">
        <LogicGate input1={input1} input2={input2} setResult={saveResult1} />
      </div>
      <div className="new-inputs">
        <label for="range">Entrada 3 "Range"</label>
        <div>
          0
          <input
            type="range"
            id="range"
            name="range"
            defaultValue={0}
            min={0}
            max={1}
            onChange={rangeHandler}
          ></input>
          1
        </div>
        <div>
          <span className="fix">
            {rangeInput == 0 ? "0 - false" : "1 - true"}
          </span>
        </div>
      </div>
      <div>
        <label>Entrada 4 "Radio" → {JSON.parse(radioInput)}</label>
        <div className="fix">
          <label>0</label>
          <input
            type="radio"
            name="radio"
            value={0}
            onChange={radioHandler}
          ></input>

          <label>1</label>
          <input
            type="radio"
            name="radio"
            value={1}
            onChange={radioHandler}
          ></input>
        </div>
      </div>
      <div className="new-inputs">
        <LogicGate
          input1={radioInput == 0 ? false : true}
          input2={rangeInput == 0 ? false : true}
          setResult={saveResult2}
        />
      </div>
      <div className="new-inputs">
        <h3>↓ Resultado de aplicar las compuertas anteriores ↓</h3>
        <LogicGate input1={result1} input2={result2} setResult={saveResult3} />
      </div>
    </div>
  );
}
