import React from 'react'


const Input = ({setInputValue,inputValue,setValidInput}) => {
    const InputChangeHandler = (e) => {
        const value = (e.target.value);
        setInputValue(e.target.value);
        setValidInput(value !=='');
      };
    
      return (
        <div>
        <input value={inputValue} onChange={InputChangeHandler} type="text" />
        </div>
      )

    }
    

export default Input