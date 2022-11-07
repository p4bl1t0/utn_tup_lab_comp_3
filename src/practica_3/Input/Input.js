import { useState } from "react";
import Array from "../ArrayEl/Array";

const Input = () => {
  const [enteredValue, setEnteredValue] = useState("");
  const [arrayHold, setArrayHold] = useState([]);

  const onClickButton = () => {
    if (enteredValue !== "") {
      setArrayHold([...arrayHold, enteredValue]);
      setEnteredValue("");
    }
  };

  const onChangeText = (event) => {
    setEnteredValue(event.target.value); 
  };

  const changeArray = (index, newItem) => {
    let editedArray = arrayHold.slice(0);  
    editedArray[index] = newItem; 
    setArrayHold(editedArray); 
  };

  const deleteArray = (index) => {
    let newArray = arrayHold.slice(0);
    newArray.splice(index, 1);
    setArrayHold(newArray);
  };

  return (
    <div>
      <input onChange={onChangeText} value={enteredValue} type="text" />
      <button onClick={onClickButton} type="button">Enviar</button>
      <Array array={arrayHold} changeArray={changeArray} deleteArray={deleteArray}/>
    </div>
  );
};

export default Input;