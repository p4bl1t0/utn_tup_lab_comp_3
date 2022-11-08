import React from "react";

const Checkbox = ({ checkboxValue, setCheckboxValue }) => {
  const handlerCheckbox = (event) => {
    event.target.checked ? setCheckboxValue(1) : setCheckboxValue(0);
  };

  return (
    <div>
      <label>Entrada 2: </label>
      <input type="checkbox" value={checkboxValue} onChange={handlerCheckbox} />
    </div>
  );
};

export default Checkbox;
