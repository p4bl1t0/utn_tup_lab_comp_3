import React, { useState } from "react";

const Input = ({input1, setInput1 }) => {

  const inputHandler = (e) => {
    const value = Number(e.target.value);
    if (value == 0 || value == 1) {
      setInput1(value);
    } else {
      setInput1(0);
    }
  };

  return (
    <div>
      <div>
        <label htmlFor="input1">Entrada 1:</label>
        <input
          type="number"
          id="input1"
          value={input1}
          onChange={inputHandler}
        />
      </div>
    </div>
  );
};

export default Input;
