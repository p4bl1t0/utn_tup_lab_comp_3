import React from 'react'
//import Inputs from './Inputs'

const List = ({__arr}) => {
  return (
    <>
        {__arr.map((item, index) => (
          <div key={index}>
            {!isNaN(Number(item)) 
              ? (<span> {Math.round(item * 100) / 100} es un numero {item % 2 === 0 ? " par " : " impar "}</span>) 
              : (<span> {item} </span>)
            }
        </div>
      ))}
    </>
  )
}

export default List