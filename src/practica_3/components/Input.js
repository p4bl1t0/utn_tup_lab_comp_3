// Input y obtener este valor
// botón guardar esto en un arreglo

import { useState } from "react";

// renderizar arreglo

import React from 'react'
import AddArray from "./AddArray";
import Listado from "./Listado";

const Input = () => {
    const [inputValue, setInputValue] = useState("");
    const [array, setArray] = useState([]);

    const onInputChange = (event) => {
        setInputValue(event.target.value)
    };

    const onAddButtonClick = () => {
        setArray(array.concat([inputValue]));
        setInputValue("");
    };


    const OnDeleteArrayHandler = (index) => {
        let copyArray = [...array];
        copyArray.splice(index, 1);
        setArray([copyArray]);

    }

    const OnEditArrayHandler = (index, newValue) => {
        let copyArray = [...array];
        // copyArray.splice(index, 1, newValue);
        // copyArray.push()
        copyArray[index] = newValue;
        setArray([copyArray]);

    }

    return (
        <div>
            <input onChange={onInputChange} value={inputValue} type="text" />
            <button onClick={onAddButtonClick} type="button" >Agregar Valor</button>
            <Listado
                list={array}
                onDelete={OnDeleteArrayHandler}
                onEdit={OnEditArrayHandler}
            />
            <div>
                {JSON.stringify(array)}

            </div>
        </div>
    );
}

export default Input



