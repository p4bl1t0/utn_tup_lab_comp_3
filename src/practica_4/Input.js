import React from "react";

const Input = ({ input1Value, setInput1Value }) => {
  const handlerInput1Value = (event) => {
    event.target.value === "1" ? setInput1Value(1) : setInput1Value(0);
  };

  return (
    <div>
      <label for="input1">Entrada 1: </label>
      <input
        id="input1"
        type="number"
        value={input1Value}
        onChange={handlerInput1Value}
        min="0"
        max="1"
      />
    </div>
  );
};

export default Input;
