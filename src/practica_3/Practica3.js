import { useState } from "react";
import ListMapped from "./components/ListMapped/ListMapped";

export default function Practica3() {
  const [textValue, setTextValue] = useState("");
  const [newArray, setNewArray] = useState([]);
  
  const inputTextHandler = (event) => {
    setTextValue(event.target.value);
  };

  const buttonHandler = () => {
    if (textValue !== "") {
      const updatedArray = [textValue, ...newArray];
      setNewArray(updatedArray);
      
    } else {
      alert("Ingrese un texto");
    }

    setTextValue("");
    
    
  };
  const editButtonHandler = (index, newText) => {
    const updatedArray = [...newArray];
    updatedArray[index] = newText;
    setNewArray(updatedArray);
  };

  return (
    <div>
      <h3>Práctica 3</h3>

      <input
        onChange={inputTextHandler}
        value={textValue}
        placeholder="Ingrese un texto"
      />
      <button onClick={buttonHandler}>
        <span>+</span>Añadir
      </button>

      <ListMapped arrayForList={newArray} setNewArray = {setNewArray} editButtonHandler = {editButtonHandler}/>
    </div>
  );
}
