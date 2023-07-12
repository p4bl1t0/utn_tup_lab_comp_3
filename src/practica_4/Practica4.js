import { useState } from "react";

export default function Practica4() {
  const [inputValue, setInputValue] = useState("0");
  const [checkboxValue, setCheckboxValue] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [result, setResult] = useState("0");

  const handleChangeInput = (e) => {
    const value1 = e.target.value;
    setInputValue(value1);
  };
  const handleBlur = (e) => {
    const value1 = parseInt(e.target.value);
    if (value1 === 1 || value1 === 0) {
      setInputValue(value1);
    } else {
      setInputValue(0);
    }
  };
  const handleChangeCheckBox = (e) => {
    const check = e.target.checked;
    if (check === true) {
      setCheckboxValue(1);
    } else {
      setCheckboxValue(0);
    }
  };
  const handleSelectChange = (e) => {
    const select1 = e.target.value;
    setSelectedOption(select1);
    if (select1 === "OR") {
    (inputValue === 1 || checkboxValue === 1)
    ?setResult(1)
    :setResult(0)
    } else if (select1 === "AND") {
      setResult(inputValue && checkboxValue);
    } else if (select1 === "NAND") {
      !(inputValue && checkboxValue)
      ?setResult(1)
      :setResult(0)
    } else if (select1 === "NOR") {
      !(inputValue || checkboxValue)
      ?setResult(1)
      :setResult(0)
    } else {
        (inputValue && !checkboxValue) || (!inputValue && checkboxValue)
        ?setResult(1)
        :setResult(0)
    }
  };

  return (
    <div className="App">
      <div>
        <label htmlFor="input1">Entrada 1:</label>
        <input
          type="number"
          id="input1"
          value={inputValue}
          onChange={handleChangeInput}
          onBlur={handleBlur}
        />
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={checkboxValue}
            onChange={handleChangeCheckBox}
          />{" "}
          Entrada 2
        </label>
      </div>
      <div>
        <label htmlFor="selectGate">Compuerta lógica:</label>
        <select
          id="selectGate"
          value={selectedOption}
          onChange={handleSelectChange}
        >
          <option value="OR">OR</option>
          <option value="AND">AND</option>
          <option value="NAND">NAND</option>
          <option value="NOR">NOR</option>
          <option value="XOR">XOR</option>
        </select>
      </div>
      <div>
        <span>Salida: {result}</span>
      </div>
    </div>
  );
}
