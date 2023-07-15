import { useState, useRef } from "react";

export default function Practica3 () {
const [array, setArray] = useState([]);
const [vacio, setVacio] = useState(null);
const inputRef = useRef();
const [editandoIndex, setEditandoIndex] = useState(null);
const [editandoValor, setEditandoValor] = useState("");

const guardar = (index) => {
  if (editandoValor.trim() === "") {
    return;
  }

  setArray(
    array.map((item, i) => {
      if (i === index) {
        return editandoValor;
      } else {
        return item;
      }
    })
  );

  setEditandoIndex(null);
  setEditandoValor("");
};

const editar = (index) => {
  setEditandoIndex(index);
  setEditandoValor(array[index]);
};

const eliminar = (index) => {
  setArray(array.filter((item, i) => i !== index));
};

const mostrarText = () => {
  setTimeout(() => {
    setVacio(null)
  }, 2000);
  const value = inputRef.current.value;
  if (value === "") {
    
    setVacio(true)

    
  } else {
    setVacio(false)
    setArray([...array, value]);
    inputRef.current.value = "";
  }
};

return (
  <div>
    <h3>Práctica 3</h3>
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={mostrarText} type="submit">
        Enviar
      </button>
      
              {vacio ? (<p>Valor vacío no admitido !!!</p>) : vacio===false ? (<p>Valor ingresado correctamente ✔️</p>) : <p>Ingresa  un valor</p> }
    </div>
    
    

    {array.length > 0 ? (
      <ul>
        {
        array.map((item, index) => (
          <li key={index}>
            
            
            {
            
            editandoIndex === index ? (
                
              <input
                
                type="text"
                placeholder={editandoValor}
                onChange={(e) => setEditandoValor(e.target.value)}
              />
            ) : (
              <>
                {isNaN(item) ? (
              item
            ) : item % 2 === 0 ? (
              "es par"
            ) : (
              "es impar"
            )
            
                  }
                      <button onClick={() => editar(index)}>EDITAR</button>
                      <button onClick={() => eliminar(index)}>×</button>
              </>
            )}
            {editandoIndex === index ? (
              <button onClick={() => guardar(index)}>GUARDAR</button>
            ) : null}
          </li>
        ))}
      </ul>
    ) : null}
  </div>
);
        
        
    
}