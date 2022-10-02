import { useState } from "react";

import Form from "./components/Form";

const Practica3 = () => {
  const [array, setArray] = useState([]);
  const [itemArray, setItemArray] = useState();

  // Setear el valor de itemArray
  const pushContentHandler = (event) => {
    setItemArray(event.target.value);
  };

  // agregar los elementos del arreglo
  const dataInputHandler = (event) => {
    event.preventDefault();
    if (itemArray !== "") {
      setArray(array.concat([itemArray]));
    }
    setItemArray("");
  };

  // eliminar los elementos del arreglo
  const deleteElement = (index) => {
    let copyArray = [...array];
    copyArray.splice(index, 1);
    setArray(copyArray);
  };

  // editar los elementos del arreglo
  const onEditHandler = (index, newValue) => {
    const onEditHandler = (index, newValue);

    let copyArray = [...array];
    copyArray[index] = newValue;
    setArray(copyArray);
    console.log(array);
  };

  return (
    <div>
      <h3>Practica 3</h3>
      <input
        type="text"
        value={itemArray}
        onChange={pushContentHandler}
      ></input>
      <button type="submit" onClick={dataInputHandler}>
        Click
      </button>
      <Form
        array={array}
        deleteElement={deleteElement}
        onEdit={onEditHandler}
      />
    </div>
  );
};

export default Practica3;
