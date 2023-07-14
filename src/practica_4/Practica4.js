import React, { useState, useRef } from 'react';
import LogicGates from './Components/LogicGates';


export default function Practica4() {
  const inputRef = useRef();
  const checkboxRef = useRef();
  const [selectedGate, setSelectedGate] = useState('');
  const [output, setOutput] = useState('');

  const handleSelectChange = (event) => {
    setSelectedGate(event.target.value);
  };

  const handleLogicGateCalculation = () => {
    const inputValue = Number(inputRef.current.value) || 0;
    const checkboxValue = checkboxRef.current.checked ? 1 : 0;

    if (selectedGate) {
      const result = LogicGates(selectedGate, inputValue, checkboxValue);
      setOutput(result);
    }
  };

  return (
    <div className="App">
      <div>
        <label htmlFor="input1">Entrada 1:</label>
        <input type="number" id="input1" ref={inputRef} defaultValue={Math.round(Math.random())} />
      </div>
      <div>
        <label>
          <input type="checkbox" ref={checkboxRef} /> Entrada 2
        </label>
      </div>
      <div>
        <label htmlFor="selectGate">Compuerta lógica:</label>
        <select id="selectGate" onChange={handleSelectChange}>
          <option value="">Seleccione una compuerta</option>
          <option value="or">OR</option>
          <option value="and">AND</option>
          <option value="nand">NAND</option>
          <option value="nor">NOR</option>
          <option value="xor">XOR</option>
        </select>
      </div>
      <div>
        <button onClick={handleLogicGateCalculation}>Calcular</button>
      </div>
      <div>
        <span>Salida: {output}</span>
      </div>
    </div>
  );
}
