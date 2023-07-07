import { useState } from 'react';
import ListItem from './ListItem';

export default function Practica3() {
  const [array, setArray] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const InputChangeHandler = (event) => {
    setInputValue(event.target.value);
  };

  const ButtonClickHandler = () => {
    if (inputValue.trim() !== '') {
      setArray([...array, inputValue]);
      setInputValue('');
    } else {
      alert('Debe rellenar el casillero');
    }
  };

  const handleDeleteItem = (index) => {
    const newArray = [...array];
    newArray.splice(index, 1);
    setArray(newArray);
  };

  const handleEditItem = (index) => {
    const newValue = prompt('Ingrese el nuevo valor');
    if (newValue !== null) {
      const newArray = [...array];
      newArray[index] = newValue;
      setArray(newArray);
    }
  };

  return (
    <div>
      <h3>Práctica 3</h3>
      <input value={inputValue} onChange={InputChangeHandler} type="text" />
      <button onClick={ButtonClickHandler}>Agregar</button>
      {array.map((value, index) => (
        <ListItem
          key={index}
          value={value}
          index={index}
          onDelete={handleDeleteItem}
          onEdit={handleEditItem}
        />
      ))}
    </div>
  );
}
