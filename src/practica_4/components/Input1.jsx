import React from 'react';

const Input1 = ({ input1, setInput1 }) => {
  const input1Handler = (event) => {
    const newValue = parseInt(event.target.value);
    setInput1(newValue === 1 ? 1 : 0);
  };

  return (
    <input
      type="number"
      onChange={input1Handler}
      value={input1}
      max={1}
      min={0}
    />
  );
};

export default Input1;