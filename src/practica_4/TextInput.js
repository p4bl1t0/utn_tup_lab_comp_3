import React, { useState } from "react";

const TextInput = ({ label, onChange }) => {
  const [inputValue, setInputValue] = useState("");
  return (
    <div>
      <label>
        {label}
        <input
          value={inputValue}
          type="number"
          id="input1"
          min="0"
          max="1"
          onChange={(event) => {
            setInputValue(event.target.value === "1" ? 1 : 0);
            if (typeof onChange === "function") {
              onChange(event.target.value === "1" ? 1 : 0);
            }
          }}
        />
        {label}
      </label>
    </div>
  );
};

export default TextInput;
