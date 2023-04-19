
import List from "./List";

import { useState } from "react";

    export default function Practica3() {

        const [array, setArray] = useState([]);

        const [enteredInput, setEnteredInput] = useState("");
        
// handler input

        const enteredInputHandler = (event) => {
          setEnteredInput(event.target.value);
        };

// add button handler

        const buttonClickHandler = (event) => {
          event.preventDefault();
          if (enteredInput === "") 
          {
            alert("Array vacio")
            setEnteredInput("");
          } 
          else 
          {
            array.push(enteredInput);
            setArray(array);
            console.log(array);
            setEnteredInput("");
          }
        };
      
    
        return (
          <>
            <h3>Práctica 3</h3>
            <input type="text" placeholder="Ingrese el texto" value={enteredInput} onChange={enteredInputHandler}/>
            <button type="button" onClick={buttonClickHandler}> Agregar </button>
            <List array={array}/>

          </>
        );
    
}