import React, { useState } from 'react';
export default function Practica3 () {
//definir un array como state
const [Array, setArray]=useState([]);
//Agregar input
const [ inputValue, setInputValue] = useState('');

const InputChangeHandler = (event) => {
    setInputValue(event.target.value);
}
const ButtonClickHandler = (event) => {
    if (inputValue !== ' '){
        const _arr = [...Array];
        _arr.push(inputValue);
        setArray(_arr)
        setInputValue(' ')//Limpia input
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
            <button onClick={ButtonClickHandler}>
                Agregar
                </button>

            {Array.map((value, index) => {
            return (
            <div key={index}>
                {typeof Number(value) === 'number' && !isNaN(value) ? (
                    <div>
                        {Math.round(value) % 2 === 0 ? 'Par' : 'Impar'}
                    </div>
                ) : (
                <input type="text" value={value} readOnly />
                )}
            </div>
            );
            })}
            </div>
)
}


//Crear un `input=text` y un `button`. Agregar un `handler` al `button` que 
//al presionar agregué a un `array`  el valor ingresado en el `input`. 
//Si el campo está vacío no se debería agregar al arreglo. 
//Tras agregar el valor del campo, el mismo debería limpiarse. 
//El `array` debe manejarse como un `state`.

//definir un array como state
//Agregar input
//agrego boton 
// Leer valor del input y meterlo en un state
//declaro handler del boton (onClick)
//Leer el valor del input
//verificar que no este vacio 
//agrego el valor al array 
//limpio el input

//muestro el arreglo state en pantalla (map)
//verfico el tipo
//muestro segun corresponda
/*
sd
asd
*/