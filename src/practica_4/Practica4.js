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
      <LogicGate input1={input1} input2={input2} />
    </div>
  );
}
