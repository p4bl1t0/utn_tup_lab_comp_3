import React, { useState } from 'react'

const EntradaValorEditable = ({ value, onEdit }) => {

    const [internalValue, setInternalValue] = useState(value);
    const onValueChange = (event) => {
        setInternalValue(event.target.value);
    }
    const onEditClick = () => {
        onEdit(internalValue);
    }
    return (
        <div>
            <input value={internalValue} onChange={onValueChange} />
            <button onClick={onEditClick}>Editar</button>
            


        </div>
    )
}

export default EntradaValorEditable