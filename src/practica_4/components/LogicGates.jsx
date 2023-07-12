import React from "react";

const LogicGates = ({ input1, input2, logicGate }) => {
  // Cálculo de la compuerta lógica
  const result = (() => {
    if (logicGate === "AND") {
      return input1 && input2;
    } else if (logicGate === "OR") {
      return input1 || input2;
    } else if (logicGate === "NAND") {
      return !(input1 && input2);
    } else if (logicGate === "NOR") {
      return !(input1 || input2);
    } else if (logicGate === "XOR") {
      return input1 !== input2;
    }
  })();

  return <p>Resultado: {result ? 1 : 0}</p>;
};

export default LogicGates;