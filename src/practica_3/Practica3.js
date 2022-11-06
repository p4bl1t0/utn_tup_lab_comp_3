import { useState } from "react";
import Listado from "./components/Listado/Listado";

export default function Practica3() {
  const [array, setArray] = useState([]);
  const [enteredInput, setEnteredInput] = useState("");
  
  const enteredInputHandler = (event) => {
    setEnteredInput(event.target.value);
  };
  
  //Funcion agregar elementos al arreglo
  
  const buttonClickHandler = (event) => {
    event.preventDefault();
    if (enteredInput === "") {
      alert("Ingrese algo no vacio")
      setEnteredInput("");
    } else {
      array.push(enteredInput);
      setArray(array);
      console.log(array);
      setEnteredInput("");
    }
  };
  
  //Funcion eliminar elemento del array
  
  const onClickDeleteHandler = (index) => {
    let newArray = [...array];
    newArray.splice(index, 1);
    setArray(newArray);
  };
  
  //Funcion editar elementos del arreglo
  
  const onClickEditHandler = (index, newValue) => {
    let newArray = [...array];
    //newArray.splice(index, 1, newValue);
    newArray[index] = newValue;
    setArray(newArray);
  }

  // Funcion mostrar datos en consola

  const consoleLogHandler = () => {
    console.log(array);
  }

  return (
    <>
      <h3>Práctica 3</h3>
      <input type="text" placeholder="Ingrese el texto" value={enteredInput} onChange={enteredInputHandler}/>
      <button type="button" onClick={buttonClickHandler}> Agregar </button>
      <button onClick={consoleLogHandler}>Mostrar datos</button>
      <Listado array={array} deleteElement={onClickDeleteHandler} editElement={onClickEditHandler}/>
    </>
  );
}
