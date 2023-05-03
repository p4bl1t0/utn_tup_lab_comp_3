import { useState } from "react";

import Alert from "../components/Alert/Alert";

import  "./operation.css"



const Operation = () => {

  const [array, setArray] = useState([])  
  const [inputValue, setInputValue] = useState("");

  const changeInputHandler = (event) => {
    setInputValue(event.target.value);
  };

  const clickHandler = () => {
    console.log("clicked!");
    if (inputValue.length !== 0) {
      setArray([...array, inputValue])
    } else {
      console.log("esta vacio")
    }
    setInputValue("")
  };


  return (
    <div>
        <input
        value={inputValue}
        onChange={changeInputHandler}
        type="text"
        />
        <button className="button" onClick= {clickHandler}>Enviar</button>
        < Alert 
          array = {array}
          setArray = {setArray} 
          inputValue = {inputValue}
          setInputValue = {setInputValue}
        />
    </div>
  )
}

export default Operation