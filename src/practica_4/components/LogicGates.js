import React from "react";

const LogicGates = ({ input2, input1, setResult }) => {

  const selectHandler = (value) => {

    if (value === "OR") {
      setResult(input1 || input2 ? 1 : 0);

    } else if (value === "AND") {
      setResult(input1 && input2 ? 1 : 0);

    } else if (value === "NAND") {
      setResult(!(input1 && input2 )? 1 : 0);

    } else if (value === "NOR") {
      setResult(!(input1 || input2 )? 1 : 0);
      
    } else if (value === "XOR") {
      setResult(
        (!input1 && input2) || (input1 && !input2) ? 1 : 0
      );
    }
    
  };

  return (
    <>
      <select onChange={(e)=>{selectHandler(e.target.value)}}>
        <option value="OR">OR</option>
        <option value="AND">AND</option>
        <option value="NAND">NAND</option>
        <option value="NOR">NOR</option>
        <option value="XOR">XOR</option>
      </select>      
    </>
  );
};

export default LogicGates;
