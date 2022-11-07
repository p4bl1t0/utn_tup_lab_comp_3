import { useState } from "react";

const CheckInput = ({ label, onChange }) => {
  const [checkboxValue, setCheckboxValue] = useState(0);

  return (
    <div>
      <label for="checkbox">
        {label}
        <input
          value={checkboxValue}
          type="checkbox"
          id="checkbox"
          onChange={(event) => {
            setCheckboxValue(event.target.value ? 1 : 0);
            if (typeof onChange === "function") {
              onChange(event.target.value ? 1 : 0);
            }
          }}
        />
        {label}
      </label>
    </div>
  );
};

export default CheckInput;
