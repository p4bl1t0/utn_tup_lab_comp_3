import React, { useState } from 'react';
import LogicGates from './LogicGates';

export default function Practica4() {
  const [inputValue, setInputValue] = useState(Math.round(Math.random()));
  const [checkboxValue, setCheckboxValue] = useState(0);
  const [selectValue, setSelectValue] = useState('or');

  const handleInputChange = (e) => {
    const newValue = parseInt(e.target.value);
    if (newValue === 0 || newValue === 1) {
      setInputValue(newValue);
    } else {
      setInputValue(0);
    }
  };

  const handleCheckboxChange = (e) => {
    const { checked } = e.target;
    setCheckboxValue(checked ? 1 : 0);
  };

  const handleSelectChange = (e) => {
    const { value } = e.target;
    setSelectValue(value);
  };

  return (
    <div className="App">
      <div>
        <label htmlFor="input1">Entrada 1:</label>
        <input
          type="number"
          id="input1"
          value={inputValue}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="input2">Entrada 2:</label>
        <input
          type="range"
          id="input2"
          min="0"
          max="1"
          value={checkboxValue}
          onChange={(e) => setCheckboxValue(parseInt(e.target.value))}
        />
      </div>
      <div>
        <label>
          <input
            type="radio"
            name="input3"
            value="0"
            onChange={handleInputChange}
            checked={inputValue === 0}
          />{' '}
          0
        </label>
        <label>
          <input
            type="radio"
            name="input3"
            value="1"
            onChange={handleInputChange}
            checked={inputValue === 1}
          />{' '}
          1
        </label>
      </div>
      <div>
        <label htmlFor="selectGate">Compuerta lógica:</label>
        <select id="selectGate" value={selectValue} onChange={handleSelectChange}>
          <option value="or">OR</option>
          <option value="and">AND</option>
          <option value="nand">NAND</option>
          <option value="nor">NOR</option>
          <option value="xor">XOR</option>
        </select>
      </div>
      <div>
        <span>Salida: {LogicGates(inputValue, checkboxValue, selectValue)}</span>
      </div>
      <div>
        <span>
          Salida 2: {LogicGates(inputValue, checkboxValue, selectValue)}
        </span>
      </div>
      <div>
        <span>
          Salida 3: {LogicGates(LogicGates(inputValue, checkboxValue, selectValue), LogicGates(inputValue, checkboxValue, selectValue), selectValue)}
        </span>
      </div>
    </div>
  );
}
