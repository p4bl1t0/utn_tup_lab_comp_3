import React from 'react'

import "../../Operation/operation.css"


const Alert = ({array, setArray, inputValue, setInputValue}) => {

    const itemHandler = (position) => {
      const newArray = array.splice(position, 1);

      
      setArray([...array]) 
    };

    const itemRenameHandler= (position) => {
      const newArray = array.splice(position, 1);
      setArray([...array, inputValue])
      setInputValue("")
    };

  return (
    <div>
        {array.map((item, index) => ( 
            <li key={index}>
               {isNaN(item)? item : item % 2 === 0 ? item+' Par': item+' Impar'} 
               <button className='button' onClick={() => {itemHandler(index)}} >Borrar</button>
               {isNaN(item)? <button className='button' onClick={() => {itemRenameHandler(index)}}>Editar</button> : null}
               
            </li>
        ))}
    </div>
  )
}

export default Alert


//Probar funcion .bind