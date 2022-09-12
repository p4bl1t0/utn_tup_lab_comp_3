import { useState } from 'react'
import React from 'react'

const Input = ({item,onEdit,index}) => {

    const [valueEdited,setValueEdited] = useState();

    const valueEditHandler = (e) => {
        setValueEdited(e.target.value)
    }

    return (
        <>
            <input type="text" placeholder={item} onChange={valueEditHandler}></input>
            <button onClick={(e)=>{onEdit(index,valueEdited)}}>Editar</button>
        </>
    )
}

export default Input;