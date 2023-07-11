import React, { useState } from "react";

export default function Practica3() {

    const [Array, setArray] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [validInput, setValidInput] = useState("");
    
    const ButtonClickHandlerDelete = (index) => {
        const deleteArr = [...Array];
        deleteArr.splice(index, 1);
        setArray(deleteArr);
    };

    const editItem= (index) =>{
        const array2=[...Array];

        if (isNaN(array2[index])) {
            if (validInput) {
                array2[index] = inputValue;
                setArray(array2);
                setInputValue("");
                setValidInput("");
            } else {
                alert("No hay valor editado");
            }
        }
    }
    
    const ButtonClickHandler = () => {
        if (inputValue !== " ") {
        const _arr = [...Array];
        _arr.push(inputValue);
        setArray(_arr);
        setInputValue(" ");
        } else {
        alert("Debe rellenar el casillero");  
        }
    }
    
    const InputChangeHandler = (e) => {
        const value = (e.target.value);
        setInputValue(e.target.value);
        setValidInput(value !=='');
      };

  return (
    <div>
      <h3>Práctica 3</h3>
      <input value={inputValue} type="text" onChange={InputChangeHandler} setInputValue={setInputValue} setValidInput ={setValidInput} inputValue={inputValue}/>
      <button onClick={ButtonClickHandler} inputValue={inputValue} setInputValue={setInputValue} setArray={setArray} Array={Array}>Agregar</button>

      {Array.map((value, index) => {
        return (
          <div key={index}>
            {typeof Number(value) === "number" && !isNaN(value) ? (
              <div>{Math.round(value) % 2 === 0 ? "Par" : "Impar"}</div>
            ) : (
              <input type="text" value={value} readOnly />
            )}
            <button onClick={ButtonClickHandlerDelete.bind(null, index)}> Borrar</button>
            <button onClick={()=>{editItem(index)}}> Editar</button>

          </div>
        );
      })}
    </div>
  );
}