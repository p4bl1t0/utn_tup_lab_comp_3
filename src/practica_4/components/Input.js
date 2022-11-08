import { useState } from "react";

const Input = () => {
  const [input, setInput] = useState(Math.round(Math.random()));

  const inputHandler = (event) => {
    setInput(event.target.value);
    if (input > 0 || input < 0) {
      return setInput(0);
    }
  };

  return (
    <div>
      <label for="input1">Entrada 1:</label>
      <input type="number" id="input1" value={input} onChange={inputHandler} />
    </div>
  );
};

export default Input;
