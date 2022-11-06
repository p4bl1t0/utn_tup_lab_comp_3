import { useState } from "react";

const InputValue = () => {
  const [input1, setInput1] = useState(Math.round(Math.random()));

  const getInputValue = (event) => {
    setInput1(event.target.value);
    if (input1 !== 1 && input1 !== 0) {
      return 0;
    }
  };

  return (
    <div>
      <label for="input1">Entrada 1:</label>
      <input
        type="number"
        id="input1"
        value={input1}
        onChange={getInputValue}
      />
    </div>
  );
};

export default InputValue;
