import React from "react";

const Checkbox = ({ checkboxValue, handleChangeCheckBox }) => {
  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={checkboxValue}
          onChange={handleChangeCheckBox}
        />{" "}
        Entrada 2
      </label>
    </div>
  );
};

export default Checkbox;
