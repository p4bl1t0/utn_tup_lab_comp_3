import { useState } from "react";
import Listado from "./Listado";

export default function Practica3() {
  const [array, setArray] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const onAddButtonClick = () => {
    if (inputValue !== "") {
      setArray([...array, inputValue]);
      setInputValue("");
    }
  };

  const onDeleteItemHandler = (index) => {
    let coppyArray = [...array];
    setArray(array.splice(index, 1));
    setArray(coppyArray);
  };

  const onEditItemHandler = (index, newValue) => {
    let coppyArray = [...array];
    coppyArray[index] = newValue;
    setArray(coppyArray);
  };

  return (
    <div>
      <h3>Práctica 3</h3>
      <input type="text" value={inputValue} onChange={onInputChange}></input>
      <button type="button" onClick={onAddButtonClick}>Agregar valor</button>
        <div>
          <Listado 
          list={array}
          onDelete={onDeleteItemHandler}
          onEditList={onEditItemHandler}
          />
        </div>
    </div>
  );
}