import { useState } from "react";

const ValorEditable = ({ value, onEdit }) => {
  const [internalValue, setInternalValue] = useState(value);
  const onValueChange = (event) => {
    setInternalValue(event.target.value);
  };
  const onEditCLick = () => {
    onEdit(internalValue);
  };

  return (
    <div className="ValorEditable">
      <input value={internalValue} onChange={onValueChange} />
      <button onClick={onEditCLick}>Editar</button>
    </div>
  );
};

export default ValorEditable;
