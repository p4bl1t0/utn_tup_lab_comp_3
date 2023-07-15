import React, { useState } from 'react';

export default function Practica3() {
  const [inputValue, setInputValue] = useState('');
  const [items, setItems] = useState([]);

  const handleAddItem = () => {
    if (inputValue.trim() !== '') {
      const newItem = isNaN(inputValue)
        ? { type: 'text', value: inputValue.trim() }
        : {
            type: 'number',
            value: Math.round(parseFloat(inputValue.trim())),
            esPar: Math.round(parseFloat(inputValue.trim())) % 2 === 0,
          };
      setItems([...items, newItem]);
      setInputValue('');
    }
  };

  const handleDeleteItem = (i) => {
    const itemsFiltered = items.filter(item => i !== item)
    setItems(itemsFiltered)
  }

  const handleEditItem = (itemValue) => {
    const itemsEdited = items.map(item => item.value === itemValue ? { type: 'text', value: inputValue.trim() } : item)
    setItems(itemsEdited)
    setInputValue('')
  }

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleAddItem}>Add</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.type === 'text' ? (
              <>
                <input type="text" value={item.value} readOnly/>
                <button
                  onClick={() => {
                    handleEditItem(item.value)

                  } }
                >
                  Editar
                </button>
              </>
            ) : (
              <>
                {item.value} ({item.esPar ? 'par' : 'impar'})
              </>
            )}
            <button
              onClick={() => handleDeleteItem(item)}
            >
              Eliminar
            </button>
          </li>

        ))}
      </ul>
    </div>
  );
}