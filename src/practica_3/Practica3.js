import React, { useState } from 'react';
import ArrayRender from './components/ArrayRender';

export default function Practica3() {
  const [array, setArray] = useState([]);
  const [textValue, setTextValue] = useState('');

  const clickHandler = (event) => {
    event.preventDefault();
    if (textValue !== '') {
      const value = parseFloat(textValue);
      const item = isNaN(value) ? textValue : value;
      setArray([...array, item]);
      setTextValue('');
      console.log(array);
    } else {
      alert('Ingrese un valor válido');
    }
  };

  const changeTextValue = (event) => {
    setTextValue(event.target.value);
  };
  const deleteHandler = (index) => {
    const arr = [...array];
    arr.splice(index, 1);
    setArray(arr);
  };
  return (
    <div>
      <h3>Práctica 3</h3>
      <label>
        Ingrese algo:
        <input value={textValue} onChange={changeTextValue} type="text" />
      </label>
      <button onClick={clickHandler}>Enviar</button>
      {array.map((item, index) => (
        <div key={index}>
          <ArrayRender item={item} />
          <button onClick={(deleteHandler)}>Borrar</button>
        </div>
      ))}
    </div>
  );
}
