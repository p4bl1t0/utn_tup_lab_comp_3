import { useState } from "react";

export default function Practica4() {
  //const inputRef = useRef();

  const valueRandom = Math.round(Math.random());
  const [input1Value, setInput1Value] = useState(valueRandom);
  const input1Handler = (value) => {
    value !== "1" ? setInput1Value(0) : setInput1Value(1);
  };

  const [inputCheckbox, setInputCheckbox] = useState(0);
  const handlerInputCheckbox = (event) => {
    setInputCheckbox(event.target.checked ? 1 : 0);
  };

  const [inputSelect, setInputSelect] = useState("OR");

  const output = (input1Value, inputCheckbox, inputSelect) => {
    switch (inputSelect) {
      case "OR":
        return input1Value || inputCheckbox ? 1 : 0;
      case "AND":
        return input1Value && inputCheckbox ? 1 : 0;
      case "NAND":
        return !(input1Value && inputCheckbox) ? 1 : 0;
      case "NOR":
        return !(input1Value || inputCheckbox) ? 1 : 0;
      case "XOR":
        return input1Value || !inputCheckbox || !input1Value || inputCheckbox
          ? 1
          : 0;
      default:
        break;
    }
  };

  return (
    <div className="App">
      <div>
        <label for="input1">Entrada 1:</label>
        <input
          type="number"
          id="input1"
          value={input1Value}
          onChange={(event) => input1Handler(event.target.value)}
        />
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={inputCheckbox}
            onChange={handlerInputCheckbox}
          />
          Entrada 2:
        </label>
      </div>
      <div>
        <label for="selectGate">Compuerta lógica: {inputSelect}</label>
        <select
          id="selectGate"
          value={inputSelect}
          onChange={(event) => setInputSelect(event.target.value)}
        >
          <option value={"OR"}>OR</option>
          <option value={"AND"}>AND</option>
          <option value={"NAND"}>NAND</option>
          <option value={"NOR"}>NOR</option>
          <option value={"XOR"}>XOR</option>
        </select>
      </div>
      <div>
        <span>Salida: {output(input1Value, inputCheckbox, inputSelect)}</span>
      </div>
    </div>
  );
}
