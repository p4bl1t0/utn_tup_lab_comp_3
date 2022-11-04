import React from 'react';

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
                    <div>
                        <li key={index}>{item}
                            <button onClick={()=> deleteItem(index)}>Eliminar item</button>
                        </li> 
                    </div>
            ))}
        </div>
  )
}

export default Numbers;