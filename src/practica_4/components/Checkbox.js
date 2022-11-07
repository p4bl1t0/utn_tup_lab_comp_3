import React from "react";

const Checkbox = ({ checkboxValue, setCheckboxValue }) => {

  const checkboxHandler = (event) => {
    setCheckboxValue(event.target.checked ? 1 : 0);
  };

  return (
    <div>
      <label htmlFor="inputCheckbox">Entrada 2:</label>
      <input type="checkbox" checked={checkboxValue} onChange={checkboxHandler}
      />
      <label>{checkboxValue}</label>
    </div>
  );
};

export default Checkbox;
