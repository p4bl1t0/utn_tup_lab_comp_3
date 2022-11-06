import { useState } from "react";

const Edit = ({ value, onEdit }) => {
  const [internalValue, setInternalValue] = useState(value);

  const onValueChange = (event) => {
    setInternalValue(event.target.value);
  };

  const onEditClick = () => {
    onEdit(internalValue);
  };

  return (
    <>
      <input value={internalValue} onChange={onValueChange} />
      <button onClick={onEditClick}>Editar</button>
    </>
  );
};

export default Edit;
