import { useState } from "react";

const InputArray = ({array, setArray}) => {
  const [valueInput, setValueInput] = useState("");

  const valueHandler = (event) => {
    setValueInput(event.target.value);
  };

  const addArray = () => {
    if (valueInput) {
      setArray([...array, valueInput]);
      setValueInput("");
    }
  };
  return (
    <div>
      <label htmlFor="input">Ingrese el texto</label>
      <input
        type="text"
        id="input"
        onChange={valueHandler}
        value={valueInput}
      />
      <button type="button" onClick={addArray}>
        Click!
      </button>
    </div>
  );
};

export default InputArray;
