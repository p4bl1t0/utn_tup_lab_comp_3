import React, { useState } from 'react';

// Componente para el input1
const Input1 = ({ setInput1 }) => {
  const [value, setValue] = useState(Math.round(Math.random())); // Valor inicial random (0 o 1)

  const handleChange = (e) => {
    const inputValue = parseInt(e.target.value);
    if (inputValue === 0 || inputValue === 1) {
      setValue(inputValue);
      setInput1(inputValue);
    } else {
      setValue(0);
      setInput1(0);
    }
  };

  return (
    <div>
      <label>Input 1:</label>
      <input type="number" value={value} onChange={handleChange} />
    </div>
  );
};

export default Input1;