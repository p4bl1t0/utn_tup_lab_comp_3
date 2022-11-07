import { useState } from "react";

export default function InputValue({ value, onEdit }) {
  const [internValue, setInternValue] = useState(value);
  const onChangeValue = (e) => {
    setInternValue(e.target.value);
  };

  const onEditClick = () => {
    onEdit(internValue);
  };

  return (
    <>
      <input value={internValue} onChange={onChangeValue} />

      <button onClick={onEditClick}>Editar</button>
    </>
  );
}
