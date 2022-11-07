import { useState } from "react";

const RangeInput = ({ label, onChange }) => {
  const [rangeValue, setRangeValue] = useState(0);

  return (
    <div>
      <label for="range">
        {label}
        <input
          value={rangeValue}
          type="range"
          id="range"
          onChange={(event) => {
            setRangeValue(event.target.value ? 1 : 0);
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

export default RangeInput;
