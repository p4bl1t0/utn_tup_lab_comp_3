import React, { useState } from "react";

const Input = ({ item, index, editElement }) => {
  const [editedValue, setEditedvalue] = useState(item);

  const valueEditedhandler = (event) => {
    setEditedvalue(event.target.value);
  };

  const editHandler = () => {
    editElement(index,editedValue);
  }

  return (
    <>
      <input type="text" value={editedValue} onChange={valueEditedhandler} />
      <button
        onClick={editHandler}
      >
        Editar
      </button>
    </>
  );
};

export default Input;