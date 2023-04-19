
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
          const __arr = [...array];

          if (enteredInput === "") 
          {
            alert("Array vacio")
            setEnteredInput("");
          } 
          else 
          {
            __arr.push(enteredInput);
            setArray(__arr);
            console.log(__arr);
            setEnteredInput("");
          }
        };
      
    
        return (
          <>
            <h3>Práctica 3</h3>
            <input type="text" placeholder="Ingrese el texto" value={enteredInput} onChange={enteredInputHandler}/>
            <button type="button" onClick={buttonClickHandler}> Agregar </button>
            <List __arr={array}/>

          </>
        );
    
}