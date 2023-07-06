import React from "react";

const Input1 = ({ input1Value, inputValueHandler }) => {
  return (
    <>
      <input value={input1Value} onChange={inputValueHandler} />
    </>
  );
};

export default Input1;
