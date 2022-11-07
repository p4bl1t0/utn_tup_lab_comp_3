import React, {useState}from 'react';

const Numbers = ({addArray,deleteItem}) => {

  return (
    <div>
            { addArray.map((item, index) => (
                !isNaN(Number(item)) 
                    ? 
                    <li>{item}{Number(item)%2 ? " Es impar" : " Es par"}
                        <button onClick={()=> deleteItem(index)}>Eliminar item</button> 
                    </li>
                    : 
                    <div key={index}>
                        <input value={item}></input> 
                        <button onClick={()=> deleteItem(index)}>Eliminar item</button>
                    </div>
            ))}
        </div>
  )
}

export default Numbers;