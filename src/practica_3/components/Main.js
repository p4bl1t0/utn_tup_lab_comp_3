import { useState } from "react";
import Operation from "./Operation"
const Main = () => {
  const [array, setArray] = useState([])  
  const [inputValue, setInputValue] = useState("");
  const changeInputHandler = (event) => {
    setInputValue(event.target.value);
  };
  const clickHandler = () => {
    if (inputValue.length !== 0) {
      setArray([...array, inputValue])
    } else {
      alert("esta vacio")
    }
    setInputValue("")
  };
  return (
    <div>
        <input value={inputValue} onChange={changeInputHandler} type="text"/>
        <button className="button" onClick= {clickHandler}>Enviar</button>
        < Operation array = {array} setArray = {setArray} inputValue = {inputValue} setInputValue = {setInputValue}/>
    </div>
  )
}

export default Main