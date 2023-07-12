import React, { useState } from 'react';
import LogicGates from './components/LogicGates';
import Input1 from './components/Input1';
import Input2 from './components/Input2';
import Input3 from './components/Input3';
import Input4 from './components/Input4';

export default function Practica4() {
  const [input1, setInput1] = useState(Math.round(Math.random()));
  const [input2, setInput2] = useState(0);
  const [input3, setInput3] = useState(0);
  const [input4, setInput4] = useState(0);
  const [logicGate, setLogicGate] = useState('AND');

  const logicGateHandler = (event) => {
    setLogicGate(event.target.value);
  };

  return (
    <div className="App">

      {/*LOGIC GATE*/}
      <div>
        <label htmlFor="selectGate">Compuerta lógica:</label>
        <select id="selectGate" value={logicGate} onChange={logicGateHandler}>
          <option value="AND">AND</option>
          <option value="OR">OR</option>
          <option value="NAND">NAND</option>
          <option value="NOR">NOR</option>
          <option value="XOR">XOR</option>
        </select>
      </div>

      {/*INPUTS*/}
      <div style={{border: '1px solid black'}}>
        <label>Entrada 1:</label>
        <Input1 input1={input1} setInput1={setInput1} />
        <label>Entrada 2:</label>
        <Input2 input2={input2} setInput2={setInput2} />
        <LogicGates input1={input1} input2={input2} logicGate={logicGate} />  
      </div>

      
      <div style={{border: '1px solid black'}}>
        <label>Entrada 3</label>
        <Input3 input3={input3} setInput3={setInput3} />
        <Input4 input4={input4} setInput4={setInput4} />
        <LogicGates input1={input3} input2={input4} logicGate={logicGate} />
      </div>

    </div>
  );
}