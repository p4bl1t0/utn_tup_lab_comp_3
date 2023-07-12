import React from 'react';

const Input3 = ({ input3, setInput3 }) => {
  const rangeHandler = (event) => {
    const newValue = parseInt(event.target.value);
    setInput3(newValue === 1 ? 1 : 0);
  };

  return (
    <input
        type="range"
        onChange={rangeHandler}
        value={input3}
        max={1}
        min={0}
      />
  );
};

export default Input3;