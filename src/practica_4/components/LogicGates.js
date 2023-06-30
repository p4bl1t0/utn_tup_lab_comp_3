import React from 'react'

const LogicGates = ({ input1, input2, input3, selectedGate }) => {
    const gates = {
      or: input1 || input2 || input3,
      and: input1 && input2 && input3,
      nand: !(input1 && input2 && input3),
      nor: !(input1 || input2 || input3),
      xor: (input1 !== input2) !== input3,
    };
  
    const result = gates[selectedGate] ? 1 : 0;
  
    return (
      <div>
        <h3>Resultado: {result}</h3>
      </div>
    );
  };

export default LogicGates