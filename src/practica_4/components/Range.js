import React from "react";

const Range = ({ rangeValue, setRangeValue }) => {

  const rangeHandler = (value) => {
    value !== '1' ? setRangeValue(0) : setRangeValue(1);
  };

  return (
    <div>
        <label htmlFor="input">Entrada 1:</label>
        <input type="range"
        min='0' 
        max='1'
        step='1'
        value={rangeValue} 
        onChange={(event) => rangeHandler(event.target.value)}
      />
    </div>
  );
};

export default Range;