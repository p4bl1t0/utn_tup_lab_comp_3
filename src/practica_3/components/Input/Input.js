import React from 'react'
import { useState } from "react";
import Button from './Button';
const Input = () => {
    
    const [array, setArray] = useState([])
    const [inputValue, setInputValue] = useState("")
    
    console.log(array)
    
    const onInputValue = () => 
    {
        if (inputValue.trim() !== "") {
            const newItem = isNaN(inputValue) ? {type: "text", value: inputValue,} 
                : {value: Math.round(inputValue), even: Math.round(inputValue) %2 == 0,}
            setArray([...array, newItem]);
            setInputValue("");
        }
    }
  return (
    <>
        <input type="text" 
            value={inputValue} 
            onChange={(event)=>setInputValue(event.target.value)}
        />
        <Button Action={onInputValue} Name="Add to Array"/>
        <ul>
            {array.map((item, index) =>(
                <><li key={index + Math.random()}>
                    {item.type === "text" ? (
                        <>
                            <input type="text" value={item.value} readOnly/>
                            <Button Name={"Borrar"}/>
                            <Button Name={"Editar"}/>
                        </>
                    ):(
                        <>
                            {item.value} {item.even ? "es par" : "es impar"}
                        </>
                    )}
                </li>
                </>
            ))}
        </ul>
    </>
  )
}

export default Input