import { useRef } from "react";

import LogicGates from "./LogicGates";

export default function Practica4({}) {
  const inputRef = useRef();

  return (
    <div className="App">
      <LogicGates />
      <div>
        <span>Salida: {}</span>
      </div>
    </div>
  );
}
