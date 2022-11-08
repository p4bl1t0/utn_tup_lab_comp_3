import { useState } from "react";
import Listado from "./components/Listado";

export default function Practica3 () {
 
    const [array, setArray] = useState([]);
    const [inputValue, setInputValue] = useState("");
    
    const onInputChange = (event) => {
        setInputValue(event.target.value);    
    };

    const onAddButtonClick = () => {
        if (inputValue) {
            console.log('inputValue:' , inputValue);
            const _array = [inputValue, ...array]
            setArray(_array);
            console.log(_array);
        }
        setInputValue("");
    }

    const borrarElemento = (index) => {
        const nuevaLista = [...array];
        nuevaLista.splice(index, 1);
        setArray(nuevaLista);
    }

    const editarElemento = (index, editValue) => {
        const nuevaListaEditada = [...array];
        nuevaListaEditada.splice(index, 1, editValue);
        setArray(nuevaListaEditada);
    }

    return (
        <>
            <h3>Práctica 3</h3>
            <h4>Ingrese información:</h4>
            <input onChange={onInputChange} value={inputValue} type="text" />
            <button onClick={onAddButtonClick} type="button" >Guardar</button> 
            <Listado 
                arrayLista = {array} 
                borrarItem = {borrarElemento} 
                editarElemento = {editarElemento}
            />    
        </>
    );
}

