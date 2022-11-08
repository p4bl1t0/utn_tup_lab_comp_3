import { useState } from "react";
import List from "./List";

export default function Practica3() {
  const [inputValue, setInputValue] = useState("");
  const [array, setArray] = useState([]);

  const onInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const onAddButtonClick = () => {
    setArray(array.concat([inputValue]));
    setInputValue("");
  };

  const onDeleteItemHandler = (index) => {
    let copyArray = [...array];
    copyArray.splice(index, 1);
    setArray(copyArray);
  };

  const onEditItemHandler = (index, newValue) => {
    let copyArray = [...array];
    copyArray[index] = newValue;
    setArray(copyArray);
  };

  return (
    <div>
      <h3>Práctica 3</h3>
      <input value={inputValue} onChange={onInputChange} />
      <button onClick={onAddButtonClick}>Agregar valor</button>
      <List
        list={array}
        onDelete={onDeleteItemHandler}
        onEdit={onEditItemHandler}
      />
    </div>
  );
}
