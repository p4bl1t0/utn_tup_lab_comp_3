import React from "react";

const Input = ({ inputValue, setInputValue }) => {

  const inputHandler = (value) => {
    value !== '1' ? setInputValue(0) : setInputValue(1);
  };

  return (
    <div>
      <label htmlFor="input">Entrada 1:</label>
      <input type="number" value={inputValue} onChange={(event) => inputHandler(event.target.value)}
      />
    </div>
  );
};

export default Input;