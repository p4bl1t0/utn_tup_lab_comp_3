import React, { useState } from 'react';

/*export default function Practica3() {
  const [array, setArray] = useState([]);

  const handleClick = () => {
    const inputValue = document.getElementById('inputValue').value;
    if (inputValue.trim() !== '') {
      setArray([...array, inputValue]);
      document.getElementById('inputValue').value = '';
    }
  }

  return (
    <div>
      <h3>practica3</h3>
      <input type="text" id="inputValue" />
      <button onClick={handleClick}>Add to Array</button>
      {array.map((value, index) => {
        return (
          <div key={index}>
            {typeof Number(value) === 'number' && !isNaN(value) ? (
              <div>{Math.round(value) % 2 === 0 ? 'Par' : 'Impar'}</div>
            ) : (
              <input type="text" value={value} readOnly />
            )}
          </div>
        );
      })}
    </div>
  );
}
*/

export default function Practica3 () {
  //definir un array como state
  const [array, setArray]=useState([]);
  //Agregar input
  const [ inputValue, setInputValue] = useState('');

  const InputChangeHandler = (event) => {
      setInputValue(event.target.value);
  }
  const ButtonClickHandler = (event) => {
      if (inputValue !== ''){
          setArray([...array, inputValue]);

          setInputValue('');
      } else {
          alert("Debe rellenar el casillero")
      }
  }
  
      return (
          <div>
              <h3>Práctica 3</h3>
              <input 
                  value={inputValue} 
                  onChange={InputChangeHandler}
                  type="text"
              />
              <button onClick={ButtonClickHandler}>
                  Agregar
                  </button>
          </div>
  )
  }