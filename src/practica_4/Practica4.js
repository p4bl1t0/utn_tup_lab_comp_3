import { useRef, useState } from "react";

export default function Practica4() {
  const inputRef = useRef();

  const [inputValue, setinputValue] = useState(Math.round(Math.random()));
  const [checkValue, setCheckValue] = useState(0);

  const handleInput = (e) => {
    const value = Number(e.target.value);
    console.log('afuera: ' +  inputValue);


    if ((value === 0) || (value === 1)) {
      console.log('adentro: ' +  inputValue);
      setinputValue(value);
    } else {
      setinputValue(0);
      console.log('else: ' +  inputValue);

    }
  };

  const handleCheckbox = (e) => {
    const isChecked = e.target.checked;
    setCheckValue(isChecked ? 1 : 0);
  };

  const options = [
    { value: "or", label: "Or" },
    { value: "nand", label: "Nand" },
    { value: "and", label: "And" },
    { value: "nor", label: "Nor" },
    { value: "xor", label: "Xor" },
  ];

  return (
    <div className="App">

      <div>
        <label htmlFor="input1">Entrada 1:</label>
        <input type="number"  id="input1"  onChange={handleInput} />
      </div>


      <div>
        <label>
          <input type="checkbox" onChange={handleCheckbox} /> Entrada 2
        </label>
      </div>


      <div>
        <label htmlFor="selectGate">Compuerta lógica:</label>

        <select>
          <option id="optionGate">or</option>
          <option id="optionGate1">and</option>
          <option id="optionGate2">nand</option>
          <option id="optionGate3">nor</option>
          <option id="optionGate4">xor</option>
        </select>
      </div>

      
      <div>
        <span>Salida: {inputValue}</span>
      </div>
    </div>
  );
}
