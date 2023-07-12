import React, { useState, useEffect } from 'react';

const LogicGates = ({ setResult, firstInput, secondInput }) => {
  const [selectedOption, setSelectedOption] = useState('');
  

  useEffect(() => {
    if (selectedOption === 'OR') {
        (firstInput === 1 || secondInput === 1) ? setResult(1) : setResult(0);
      } else if (selectedOption === 'AND') {
        setResult(firstInput && secondInput);
      } else if (selectedOption === 'NAND') {
        !(firstInput && secondInput) ? setResult(1) : setResult(0);
      } else if (selectedOption === 'NOR') {
        !(firstInput || secondInput) ? setResult(1) : setResult(0);
      } else {
        (firstInput && !secondInput) || (!firstInput && secondInput) ? setResult(1) : setResult(0);
      }
  }, [firstInput, secondInput, selectedOption, setResult]);

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
