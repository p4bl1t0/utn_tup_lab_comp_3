import { useState } from "react";
import InputsContainer from "./components/InputsContainer";

export default function Practica3() {
  const [array, setArray] = useState([]);
  const [enteredInput, setEnteredInput] = useState("");

  const enteredInputHandler = (event) => {
    setEnteredInput(event.target.value);
  };

  const buttonClickHandler = (event) => {
    event.preventDefault();
    if (enteredInput === "") {
      alert("Debes agregar algo en el input");
      setEnteredInput("");
    } else {
      array.push(enteredInput);
      setArray(array);
      setEnteredInput("");
    }
  };


  const onClickDeleteHandler = (index) => {
    let newArray = [...array];
    newArray.splice(index, 1);
    setArray(newArray);
  };


  const onClickEditHandler = (index, newValue) => {
    let newArray = [...array];
    newArray[index] = newValue;
    setArray(newArray);
  };


  return (
    <>
      <h3>Práctica 3</h3>
      <p>Datos cargados: {array.toString()}</p>
      <input
        type="text"
        placeholder="Ingrese el texto"
        value={enteredInput}
        onChange={enteredInputHandler}
      />
      <button type="button" onClick={buttonClickHandler}>
        Agregar
      </button>
      <InputsContainer
        array={array}
        deleteElement={onClickDeleteHandler}
        editElement={onClickEditHandler}
      />
    </>
  );
}