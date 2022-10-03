import { useState } from "react";

const Practica4 = () => {
  const [inputValue, setInputValue] = useState(Math.round(Math.random()));
  const [checkboxValue, setCheckboxValue] = useState();
  const [output, setOutput] = useState();

  // valor del input y asignar el valor al state
  const inputValueHandler = (e) => {
    let aux = e.target.value === 1 ? 1 : 0;
    setInputValue(aux);
  };

  // captar el valor del checkbox y asignar el valor al state
  const checkboxHandler = (e) => {
    let aux = e.target.value ? 1 : 0;
    setCheckboxValue(aux);
  };

  const selectHandler = (e) => {
    let aux = e.target.value;
    console.log(aux);

    switch (aux) {
      case "OR":
        setOutput(Boolean(inputValue || checkboxValue).toString());
        break;
      case "AND":
        setOutput(Boolean(inputValue || checkboxValue).toString());
        break;
      case "NAND":
        setOutput(Boolean(inputValue || checkboxValue).toString());
        break;
      case "NOR":
        setOutput(Boolean(inputValue || checkboxValue).toString());
        break;
      case "XOR":
        setOutput(
          Boolean(
            (inputValue && !checkboxValue) || (!inputValue && checkboxValue)
          ).toString()
        );
        break;
      default:
    }
  };

  return (
    <div>
      <input placeholder={inputValue} onChange={inputValueHandler} />
      <input type="checkbox" onChange={checkboxHandler} />
      <select onChange={selectHandler}>
        <option disabled>select</option>
        <option value="OR">OR</option>
        <option value="AND">AND</option>
        <option value="NAND">NAND</option>
        <option value="NOR">NOR</option>
        <option value="XOR">XOR</option>
      </select>

      <p>{output}</p>
    </div>
  );
};

export default Practica4;
