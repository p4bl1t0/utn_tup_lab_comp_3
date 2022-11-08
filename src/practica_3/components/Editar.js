import React, { useState } from 'react'

const Editar = ({index,item, borrar, edit}) => {
    
    const [editValue, setEditValue] = useState(item);
    
    const changeValue = (e) => {
        setEditValue(e.target.value);
        console.log("editValue:", editValue);
    }

    return (
    <div>
        <li>
            <input type="text" onChange={changeValue} value={editValue}/> 
            <button onClick={borrar.bind(null, index)} type='button'>Borrar</button>
            <button onClick={edit.bind(null, index, editValue)} type="button">Guardar cambios</button>
        </li>
    </div>
  )
}

export default Editar