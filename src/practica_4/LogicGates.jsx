import React from 'react';

const LogicGates = (input1, input2, gate) => {
  const result = gate === 'or'
    ? input1 || input2
    : gate === 'and'
    ? input1 && input2
    : gate === 'nand'
    ? !(input1 && input2)
    : gate === 'nor'
    ? !(input1 || input2)
    : gate === 'xor'
    ? (input1 && !input2) || (!input1 && input2)
    : '';

  return result ? 1 : 0;
};

export default LogicGates;
