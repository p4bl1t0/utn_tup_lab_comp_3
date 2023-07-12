import React from 'react';

const Input2 = ({ input2, setInput2 }) => {
  const checkboxHandler = (event) => {
    const newValue = event.target.checked ? 1 : 0;
    setInput2(newValue);
  };

  return (
    <input
      type="checkbox"
      checked={input2}
      onChange={checkboxHandler}
    />
  );
};

export default Input2;