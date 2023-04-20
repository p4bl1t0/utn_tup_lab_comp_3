import React, { useState } from 'react';
export default function Practica3 () {
    //definir un array como state
    const [array, setArray]=useState([]);
    //Agregar input
    const [ inputValue, setInputValue] = useState('');
  
    const InputChangeHandler = (event) => {
        setInputValue(event.target.value);
    }
    const ButtonClickHandler = (event) => {
        if (inputValue !== ''){
            const _arr = [...array];
            _arr.push(inputValue);
            setArray(_arr)
            setInputValue('')//Limpia input
        } else {
            alert("Debe rellenar el casillero")
        }
    }
  
        return (
            <div>
                <h3>Práctica 3</h3>
                <input 
                    value={inputValue} 
                    onChange={InputChangeHandler}
                    type="text"
                />
                <button OnClick={ButtonClickHandler}>
                    Agregar
                    </button>
            </div>
    )
    }