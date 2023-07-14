import { useState } from "react";
import Array from "../Array/Array";

const Input = () => {
  const [enteredText, setEnteredText] = useState("");
  const [arraySave, setArraySave] = useState([]);

  const changeTextHandler = (event) => {
    setEnteredText(event.target.value);
  };

  const clickButtonHandler = () => {
    if (enteredText !== "") {
      setArraySave([...arraySave, enteredText]);
      setEnteredText("");
    }
  };

  const deleteArrayItem = (index) => {
    let newArray = arraySave.slice(0);
    newArray.splice(index, 1);
    setArraySave(newArray);
  };

  const changeArrayItem = (index, newItem) => {
    let editedArray = arraySave.slice(0);
    editedArray[index] = newItem;
    setArraySave(editedArray);
  };

  return (
    <div>
      <input onChange={changeTextHandler} value={enteredText} type="text" />
      <button onClick={clickButtonHandler} type="button">
        Send
      </button>
      <Array
        array={arraySave}
        deleteArrayItem={deleteArrayItem}
        changeArrayItem={changeArrayItem}
      />
    </div>
  );
};

export default Input;
import { useState } from "react";

import Array from "../Array/Array";

const Input = () => {
  const [enteredText, setEnteredText] = useState("");
  const [arraySave, setArraySave] = useState([]);

  const changeTextHandler = (event) => {
    setEnteredText(event.target.value);
  };

  const clickButtonHandler = () => {
    if (enteredText !== "") {
      setArraySave([...arraySave, enteredText]);
      setEnteredText("");
    }
  };

  const deleteArrayItem = (index) => {
    let newArray = arraySave.slice(0);
    newArray.splice(index, 1);
    setArraySave(newArray);
  };

  const changeArrayItem = (index, newItem) => {
    let editedArray = arraySave.slice(0);
    editedArray[index] = newItem;
    setArraySave(editedArray);
  };

  return (
    <div>
      <input onChange={changeTextHandler} value={enteredText} type="text" />
      <button onClick={clickButtonHandler} type="button">
        Send
      </button>
      <Array
        array={arraySave}
        deleteArrayItem={deleteArrayItem}
        changeArrayItem={changeArrayItem}
      />
    </div>
  );
};

export default Input;
