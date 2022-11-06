import { useState } from "react";
import DeleteText from "./DeleteText";

const Input = () => {
  const [enteredText, setEnteredText] = useState("");
  const [array, setArray] = useState([]);

  const changeTextHandler = (event) => {
    setEnteredText(event.target.value);
  };

  const clickButtonHandler = () => {
    if (enteredText !== "") {
      setArray([...array, enteredText]);
      setEnteredText("");
    }
  };

  const changeArrayItem = (index, newItem) => {
    let editedArray = array.slice(0);
    editedArray[index] = newItem;
    setArray(editedArray);
  };

  const deleteArrayItem = (index) => {
    let newArray = array.slice(0);
    newArray.splice(index, 1);
    setArray(newArray);
  };

  return (
    <div>
      <input onChange={changeTextHandler} value={enteredText} type="text" />
      <button onClick={clickButtonHandler} type="button">
        Enviar
      </button>
      <DeleteText
        array={array}
        deleteArrayItem={deleteArrayItem}
        changeArrayItem={changeArrayItem}
      />
    </div>
  );
};

export default Input;
