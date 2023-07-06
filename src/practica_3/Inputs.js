import React, { useState } from "react";

const Inputs = ({ item, index, editElement }) => {
  const [editedValue, setEditedvalue] = useState();

  const valueEditedhandler = (event) => {
    setEditedvalue(event.target.value);
  };

  return (
    <>
      <input type="text" placeholder={item} onChange={valueEditedhandler} />
      <button
        onClick={() => {
          editElement(index, editedValue);
        }}
      >
        {" "}
        Editar{" "}
      </button>
    </>
  );
};

export default Inputs;
