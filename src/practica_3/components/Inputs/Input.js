import React from 'react'

const Input = ({setInputValue, inputValue,setValidInput}) => {

    const handleChange = (e) => {
        const value1= (e.target.value);
        setInputValue(value1);
        setValidInput(value1 !=='');
      };

  return (
    <>
        <input type="text" value={inputValue} onChange={handleChange}/>
    </>
  )
}

export default Input