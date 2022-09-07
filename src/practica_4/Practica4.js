import { useRef, useState } from "react";

export default function Practica4() {
  const inputRef = useRef();
  const [inputValue, setInputValue] = useState(0);
  const [checkboxValue, setCheckboxValue] = useState(0);

  const inputValueHandler = (event) => {
    parseInt(event.target.value) === 1 ? setInputValue(1) : setInputValue(0);
  };

  const checkboxValueHandler = (event) => {
    event.target.checked === true ? setCheckboxValue(1) : setCheckboxValue(0);
  };

  return (
    <div className="App">
      <div>
        <label for="input1">Entrada 1:</label>
        <input type="number" id="input1" onChange={inputValueHandler} />
      </div>
      <div>
        <label>
          <input type="checkbox" onChange={checkboxValueHandler} /> Entrada 2
        </label>
      </div>
      <div>
        <label for="selectGate">Compuerta lógica:</label>
        <select id="selectGate">
          <option value={"or"}>OR</option>
          <option value={"and"}>AND</option>
          <option value={"nand"}>NAND</option>
          <option value={"nor"}>NOR</option>
          <option value={"xor"}>XOR</option>
        </select>
      </div>
      <div>
        <span>Salida: {/* aca iria el resultado*/}</span>
      </div>
    </div>
  );
}
