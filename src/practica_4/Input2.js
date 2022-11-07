import React, { useState } from "react";

const Input2 = ({ sentRangeValue, sentRadValue }) => {
  const [radio, setRadio] = useState();
  const rangeValue = (event) => {
    sentRangeValue(Number(event.target.value));
  };

  const rad1Value = (event) => {
    setRadio(event.target.value);
    sentRadValue(Number(event.target.value));
  };

  const rad2Value = (event) => {
    setRadio(event.target.value);
    sentRadValue(Number(event.target.value));
  };

  return (
    <div>
      <label>0</label>
      <input type="range" onChange={rangeValue} min="0" max="1" step="1" />
      <label>1</label>
      <input
        type="radio"
        onChange={rad1Value}
        value="1"
        checked={radio === "1"}
      />
      <label>0</label>
      <input
        type="radio"
        onChange={rad2Value}
        value="0"
        checked={radio === "0"}
      />
    </div>
  );
};

export default Input2;
