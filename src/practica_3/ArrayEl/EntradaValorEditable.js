import { useState } from "react";

export default function EntradaValorEditable ({ value, onEdit }) {
    const [inputValue, setInputValue] = useState(value); 
    const onValueChange = (event) => { 
        setInputValue(event.target.value); 
    }
    const onEditClick = () => { 
        onEdit(inputValue); 
    }
    return (
        <>
            <input value={inputValue} onChange={onValueChange}/>
            <button onClick={onEditClick}>Editar</button> 
        </>
    );
}