import React from 'react'

const Button = ({ inputValue, setInputValue, setArray, Array}) => {
    const ButtonClickHandler = () => {
        if (inputValue !== " ") {
          const _arr = [...Array];
          _arr.push(inputValue);
          setArray(_arr);
          setInputValue(" "); //Limpia input
        } else {
          alert("Debe rellenar el casillero");  
        }
    }
    return (
    <div>
    <button onClick={ButtonClickHandler}>Agregar</button>
    </div>
  )
}

export default Button;