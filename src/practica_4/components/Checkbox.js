import { useState } from "react";

const Checkbox = () => {
  const [checkbox, setCheckbox] = useState(0);

  const getCheckboxValue = (event) => {
    setCheckbox(event.target.checked ? 1 : 0);
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

export default Checkbox;
