import { useState } from "react";

const Edit = ({ array, setArray, index, item }) => {
  const [editValue , setEditValue] =useState(item);

  const editText = (index) => {
    let auxArray = array.splice(0);
    auxArray[index] = editValue;
    setArray(auxArray);
  };
  return (
    <>
      <input value={editValue} onChange={(event)=>{setEditValue(event.target.value)}}/>
      <button
        onClick={() => {
          editText(index);
        }}
      >
        Editar
      </button>
    </>
  );
};

export default Edit;
