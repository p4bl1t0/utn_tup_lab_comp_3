import React, { useState } from 'react';
import Input1 from './components/Input1';
import Checkbox from './components/CheckBox';
import LogicGates from './components/LogicGates';
import Input2 from './components/Input2';
import Input3 from './components/Input3';

const Practica4 = () => {
  const [input1, setInput1] = useState(0);
  const [checkbox, setCheckbox] = useState(0);
  const [selectedGate, setSelectedGate] = useState('or');
  const [input3, setInput3] = useState(0);

  const handleSelectChange = (e) => {
    setSelectedGate(e.target.value);
  };

  return (
    <div>
      <h2>Práctica 4</h2>
      <Input1 setInput1={setInput1} />
      <Checkbox setCheckbox={setCheckbox} />

      <div>
        <label>Seleccionar compuerta lógica:</label>
        <select value={selectedGate} onChange={handleSelectChange}>
          <option value="or">OR</option>
          <option value="and">AND</option>
          <option value="nand">NAND</option>
          <option value="nor">NOR</option>
          <option value="xor">XOR</option>
        </select>
      </div>

      <LogicGates input1={input1} input2={Input2} input3={Input3} selectedGate={selectedGate} />

      {/* Inputs adicionales para la tarea 5 */}
      <div>
        <label>Input 2:</label>
        <input type="number" />
      </div>

      <Input3 setInput3={setInput3} />

      <LogicGates input1={input1} input2={Input2} input3={Input3} selectedGate={selectedGate} />
    </div>
  );
};

export default Practica4;
