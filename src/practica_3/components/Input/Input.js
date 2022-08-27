import { useState } from "react";

import ArrayWriter from "../ArrayWriter/ArrayWriter";

const Input = () => {
  const [enteredText, setEnteredText] = useState("");
  const [arraySave, setArraySave] = useState([]);

  const changeTextHandler = (event) => {
    setEnteredText(event.target.value);
  };

  const clickButtonHandler = () => {
    if (enteredText != "") {
      setArraySave([...arraySave, enteredText]);
      setEnteredText("");
    }
  };

  return (
    <div>
      <input onChange={changeTextHandler} value={enteredText} type="text" />
      <button onClick={clickButtonHandler} type="button">
        Enviar
      </button>
      <ArrayWriter array={arraySave} />
    </div>
  );
};

export default Input;
