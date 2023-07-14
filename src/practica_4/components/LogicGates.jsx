import React, { useEffect, useState } from "react";

const LogicGates = ({input1, checkBox1, radio, range}) => {

    const [select, setSelect] = useState();
    const [options, setOption] = useState("OR")
    


    useEffect(() => {

    console.log(input1, checkBox1, radio, range)

       if (options === "OR") {
          if (input1 == 1 || checkBox1 == 0 || radio == 1 || range == 0) {
            setSelect(1);
          } else {
            setSelect(0);
          }
        } else if (options === "AND") {
          if (input1 == 1 && checkBox1 == 1 && radio == 1 && range == 1) {
            setSelect(1);
          } else {
            setSelect(0);
          }
        } else if (options === "NAND") {
          if (input1 == 1 && checkBox1 == 1 && radio == 1 && range == 1) {
            setSelect(0);
          } else {
            setSelect(1);
          }
        } else if (options === "NOR") {
          if (input1 == 0 && checkBox1 == 0 && radio == 0 && range == 0) {
            setSelect(1);
          } else {
            setSelect(0);
          }
        } else if (options === "XOR") {
          if (input1 != checkBox1 != radio != range) {
            setSelect(1);
          } else {
            setSelect(0);
          }
        }
        
    }, [options, input1, checkBox1, radio, range])

    const selectOption = (e) => {
        setOption(e.target.value)
    }
    


  return (
    <div>
      <div>
        <label htmlFor="selectGate">Compuerta lógica:</label>
        <select id="selectGate" onChange={selectOption}>
          <option value="OR">OR</option>
          <option value="AND">AND</option>
          <option value="NAND">NAND</option>
          <option value="NOR">NOR</option>
          <option value="XOR">XOR</option>
        </select>
      </div>
      <div>
        <span>Salida: {select} </span>
      </div>
    </div>
  );
};

export default LogicGates;
