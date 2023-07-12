import React, { useState, useEffect } from 'react';

const LogicGates = ({ setResult, inputValue, checkboxValue }) => {
  const [selectedOption, setSelectedOption] = useState('');
  

  useEffect(() => {
    if (selectedOption === 'OR') {
        (inputValue === 1 || checkboxValue === 1) ? setResult(1) : setResult(0);
      } else if (selectedOption === 'AND') {
        setResult(inputValue && checkboxValue);
      } else if (selectedOption === 'NAND') {
        !(inputValue && checkboxValue) ? setResult(1) : setResult(0);
      } else if (selectedOption === 'NOR') {
        !(inputValue || checkboxValue) ? setResult(1) : setResult(0);
      } else {
        (inputValue && !checkboxValue) || (!inputValue && checkboxValue) ? setResult(1) : setResult(0);
      }
  }, [inputValue, checkboxValue, selectedOption, setResult]);

  const handleSelectChange = (e) => {
    const select1 = e.target.value;
    setSelectedOption(select1);
  };


  return (
    <>
      <label htmlFor="selectGate">Compuerta lógica:</label>
      <select id="selectGate" value={selectedOption} onChange={handleSelectChange}>
        <option value="OR">OR</option>
        <option value="AND">AND</option>
        <option value="NAND">NAND</option>
        <option value="NOR">NOR</option>
        <option value="XOR">XOR</option>
      </select>
    </>
  );
};

export default LogicGates;
