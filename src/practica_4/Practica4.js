import { useRef, useState, useEffect } from "react";

export default function Practica4() {
  const inputRef = useRef();

  const [inputValue, setinputValue] = useState(Math.round(Math.random()));
  const [checkValue, setCheckValue] = useState(0);
  const [select, setselect] = useState();
  const [result, setResult] = useState();
  const { getAnd, getNand, getNor, getOr, getXor } = useGates();

  useEffect(() => {
    switch (select) {
      case "or":
        setResult(getOr(inputValue, checkValue));
        break;
      case "and":
        setResult(getAnd(inputValue, checkValue));
        break;
      case "nand":
        setResult(getNand(inputValue, checkValue));
        break;
      case "nor":
        setResult(getNor(inputValue, checkValue));
        break;
      case "xor":
        setResult(getXor(inputValue, checkValue));
        break;

      default:
        break;
    }
  }, [checkValue, inputValue]);

  const handleInput = (e) => {
    const value = Number(e.target.value);

    if (value === 0 || value === 1) {
      setinputValue(value);
    } else {
      setinputValue(0);
    }
  };

  const handleCheckbox = (e) => {
    const isChecked = e.target.checked;
    setCheckValue(isChecked ? 1 : 0);
  };

  const handleGates = (e) => {
    const value = e.target.select;
    setselect(value);
  };

  return (
    <div className="App">
      <div>
        <label htmlFor="input1">Entrada 1:</label>
        <input type="number" id="input1" onChange={handleInput} />
      </div>

      <div>
        <label>
          <input type="checkbox" onChange={handleCheckbox} /> Entrada 2
        </label>
      </div>

      <div>
        <label htmlFor="selectGate">Compuerta lógica:</label>

        <select onChange={handleGates}>
          <option value={"or"} id="optionGate">
            or
          </option>
          <option value={"and"} id="optionGate1">
            and
          </option>
          <option value={"nand"} id="optionGate2">
            nand
          </option>
          <option value={"nor"} id="optionGate3">
            nor
          </option>
          <option value={"xor"} id="optionGate4">
            xor
          </option>
        </select>
      </div>

      <div>
        <span>Salida: {logicGate}</span>
      </div>
    </div>
  );
}
