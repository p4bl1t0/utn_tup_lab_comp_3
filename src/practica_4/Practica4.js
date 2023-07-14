import { useRef, useState } from "react";
import LogicGates from "./components/LogicGates";
import Input from "./components/Input";
import Check from "./components/Check";
import Radio from "./components/Radio";
import Range from "./components/Range";

export default function Practica4() {
  const [input1, setInput1] = useState(0);
  const [checkBox1, setCheckBox1] = useState(0);
  const [radio, setRadio] = useState(0);
  const [range, setRange] = useState(0);



  return (
    <div className="App">
      <Input input1={input1} setInput1={setInput1}/>
      <Check checkBox1={checkBox1} setCheckBox1={setCheckBox1}/>
      <Radio radio={radio} setRadio={setRadio}/>
      <Range range={range} setRange={setRange}/>
      <LogicGates input1={input1} checkBox1={checkBox1} radio={radio} range={range}/>
    </div>
  );
}
