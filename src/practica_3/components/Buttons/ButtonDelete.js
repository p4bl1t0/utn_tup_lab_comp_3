import React from 'react'

const ButtonDelete = ({array,setArray,index}) => {
    const deleteItem = (e) => {
        const array2=[...array];
        array2.splice(e,1);
        setArray(array2);
      }

  return (
    <>
        <button onClick={()=>{deleteItem(index)}}>Delete</button>
    </>
  )
}

export default ButtonDelete