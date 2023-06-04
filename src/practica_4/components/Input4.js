import { useState } from "react";

const Input4 = ({ setInput4 }) => {
  const [valorInput, setValorInput] = useState("0");

  const handleChange = (event) => {
    setValorInput(event.target.value);
    setInput4(parseInt(event.target.value));
  };

  return (
    <div>
      <label>Entrada 4:</label>
        <label>1
        <input
          type="radio"
          value="1"
          checked={valorInput === "1"}
          onChange={handleChange}
        />
        </label>
      
        <label>0
        <input
          type="radio"
          value="0"
          checked={valorInput === "0"}
          onChange={handleChange}
        />
        </label>
      
    </div>
  );
};

export default Input4;