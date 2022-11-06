import { useState } from "react";

const CheckboxValue = () => {
  const [checkbox, setCheckbox] = useState("");

  const getCheckboxValue = (event) => {
    setCheckbox(event.target.checked);
  };

  return (
    <div>
      <label>
        <input type="checkbox" value={checkbox} onChange={getCheckboxValue} />{" "}
        Entrada 2
      </label>
    </div>
  );
};

export default CheckboxValue;
