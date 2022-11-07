import { useState } from "react";

const RadioInput = ({ onChange }) => {
  const [radioValue, setRadioValue] = useState(0);

  return (
    <div>
      <label htmlFor="radio1">Verdadero</label>
      <input
        value={radioValue}
        type="radio"
        id="radio1"
        onChange={(event) => {
          setRadioValue(event.target.value ? 1 : 0);
          if (typeof onChange === "function") {
            onChange(event.target.value ? 1 : 0);
          }
        }}
      />
      <label htmlFor="radio2">Falso</label>
      <input
        value={radioValue}
        type="radio"
        id="radio2"
        onChange={(event) => {
          setRadioValue(event.target.value ? 1 : 0);
          if (typeof onChange === "function") {
            onChange(event.target.value ? 1 : 0);
          }
        }}
      />
    </div>
  );
};

export default RadioInput;
