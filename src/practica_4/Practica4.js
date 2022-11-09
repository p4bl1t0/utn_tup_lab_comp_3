import { useState } from "react";
import "./Practica4.css";
import Input from "./components/Input";
import Checkbox from "./components/Checkbox";
import LogicGates from "./components/LogicGates";

export default function Practica4() {
  const [input, setInput] = useState(0);
  const [checkbox, setCheckbox] = useState(0);
  const [radio, setRadio] = useState(0);
  const [range, setRange] = useState(0);
  const [output1, setOutput1] = useState();
  const [output2, setOutput2] = useState();
  const [output3, setOutput3] = useState();

  const inputValue = (args) => {
    setInput(args);
  };

  const checkboxValue = (args) => {
    setCheckbox(args);
  };

  const radioHandler = (event) => {
    setRadio(event.target.value);
  };

  const rangeHandler = (event) => {
    setRange(event.target.value);
  };

  const getOutput1 = (output) => {
    setOutput1(output);
  };
  const getOutput2 = (output) => {
    setOutput2(output);
  };
  const getOutput3 = (output) => {
    setOutput3(output);
  };

  return (
    <div className="input">
      <h3>Práctica 4</h3>

      <div className="input-adjust">
        <label>Entrada 1: </label>
        <Input inputValue={inputValue} />

        <div className="output">
          <span>{input === 0 ? "false" : "true"}</span>
        </div>
      </div>

      <div className="input-adjust">
        <label>Entrada 2: </label>
        <Checkbox valueInput2={checkboxValue} />

        <div className="output">
          <span>{checkbox === 0 ? "false" : "true"}</span>
        </div>
      </div>

      <div className="input-adjust">
        <LogicGates input={input} checkbox={checkbox} setOutput={getOutput1} />
      </div>

      <div className="input-adjust">
        <div>
          <label for="range">Rango: </label>
          <input
            type="range"
            id="range"
            name="range"
            defaultValue={0}
            min={0}
            max={1}
            onChange={rangeHandler}
          />
          <div className="output">
            <span>{range === 0 ? "0 False" : "1 True"}</span>
          </div>
        </div>

        <div className="input-adjust">
          <label>Radio: {JSON.parse(radio)}</label>
          <div className="input-adjust">
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
        <div className="input-adjust">
          <LogicGates
            input1={radio === 0 ? false : true}
            input2={range === 0 ? false : true}
            setOutput={getOutput2}
          />
        </div>
        <div className="input-adjust">
          <h3>Resultado aplicando compuertas previas:</h3>
          <LogicGates
            input={output1}
            checkbox={output2}
            setOutput={getOutput3}
          />
        </div>
      </div>
    </div>
  );
}
