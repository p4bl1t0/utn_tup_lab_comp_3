import React from "react";

const Input = ({ inputValue, handleChangeInput, handleBlur }) => {
  return (
    <div>
      <label htmlFor="input1">Input 1:</label>
      <input
        value={inputValue}
        type="number"
        id="input1"
        onChange={handleChangeInput}
        onBlur={handleBlur}
      />
    </div>
  );
};

export default Input;
