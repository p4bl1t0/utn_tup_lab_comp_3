import React from "react";

const Check = ({ checkboxValue, handleChangeCheckBox }) => {
  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={checkboxValue}
          onChange={handleChangeCheckBox}
        />
        input 2
      </label>
    </div>
  );
};

export default Check;
