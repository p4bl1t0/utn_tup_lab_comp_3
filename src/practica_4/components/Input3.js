

import React, { useState } from 'react';

const Input3 = ({ setInput3 }) => {
  const [value, setValue] = useState(0);

  const handleChange = (e) => {
    const inputValue = parseInt(e.target.value);
    if (inputValue === 0 || inputValue === 1) {
      setValue(inputValue);
      setInput3(inputValue);
    } else {
      setValue(0);
      setInput3(0);
    }
  };

  return (
    <div>
      <label>Input 3:</label>
      <input type="number" value={value} onChange={handleChange} />
    </div>
  );
}

export default Input3;