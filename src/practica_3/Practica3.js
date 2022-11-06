import { useState } from "react";

import Form from "./components/Form";

const Practica3 = () => {
  const [array, setArray] = useState([]);
  const [itemArray, setItemArray] = useState();

  const pushContentHandler = (event) => {
    setItemArray(event.target.value);
  };

  const dataInputHandler = (event) => {
    event.preventDefault();
    if (itemArray !== "") {
      setArray(array.concat([itemArray]));
    }
    setItemArray("");
  };

  const deleteElement = (index) => {
    let copyArray = [...array];
    copyArray.splice(index, 1);
    setArray(copyArray);
  };

  const onEditHandler = (index, newValue) => {
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
