import React from 'react'

const Input = ({inputValue, handleChangeInput, handleBlur}) => {
  return (
    <div>   <label htmlFor="input1">Entrada 1:</label>
    <input
      type="number"
      id="input1"
      value={inputValue}
      onChange={handleChangeInput}
      onBlur={handleBlur}
    /></div>
  )
}

export default Input