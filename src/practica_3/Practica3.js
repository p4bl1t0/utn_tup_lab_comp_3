import { useState } from "react";
import Listado from "./Listado";

export default function Practica3() {
  const [array, setArray] = useState([]);

  const [inputValue, setInputValue] = useState("");

  const handlerInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handlerButtonClick = (e) => {
    console.log("inputValue", inputValue);
    setArray(array.concat([inputValue]));
    setInputValue("");
  };

  const deleteHandlerButton = (index) => {
    let filteredArray = [...array];
    filteredArray.splice(index, 1);
    setArray(filteredArray);
  };

  const editHandlerButton = (index, editValue) => {
    let filteredArray = [...array];
    filteredArray[index] = editValue;
    setArray(filteredArray);
  };

  return (
    <div>
      <h3>Práctica 3</h3>
      <input value={inputValue} onChange={handlerInputChange} />
      <button onClick={handlerButtonClick}> Agregar valor </button>
      <Listado
        list={array}
        onDelete={deleteHandlerButton}
        onEdit={editHandlerButton}
      />
    </div>
  );
}
