import { useState } from "react"


const Form = () => {

    // Arreglo vacio //
    const [ array, setArray ] = useState([]);
    // Valor input
    const [ inputValue, setInputValue ] = useState('');
    // Mensaje de error
    const [ error, setError ] = useState(false);


    const onInputChange = (e) => {
      setInputValue(e.target.value);
    };

    const handleDeleteItem = (i) => {    
      const newArray = array.filter(item => item.value !== i)
      setArray(newArray)
    };
    

    const handleEditItem = (i) => {
      const newEdit = array.map(item => item.value === i ? {type: "text", value: inputValue.trim() } : item)       
      setArray(newEdit);
      console.log(newEdit)
    }  

    const buttonClickHandler = () => {
      if (inputValue.trim() !== "") {
        const newArray = isNaN(inputValue)
        ? { type: 'text', value: inputValue.trim() }
        : {
            type: 'number',
            value: Math.round(parseFloat(inputValue.trim())),
            esPar: Math.round(parseFloat(inputValue.trim())) % 2 === 0,
        };
        setArray([...array, newArray]);
        setInputValue("");
      } else {
        setError(true);
        setTimeout(() => {
          setError(error);
        }, 2500);
      }      
    };

  return (
    <div>
      <input type="text"
      value={inputValue}
      onChange={onInputChange} />

      <button onClick={buttonClickHandler}>Agregar</button>

      {error && <h3>El campo es obligatorio</h3>}

      <ul>
        {array.map((item, index) => (
            <>
          <li key={index.id}>            
            {typeof item.value === "number" ? (
              `${item.value} es ${item.value % 2 === 0 ? "Par " : "Impar "}`
            ) : (
              <input type="text" value={item.value} readOnly />
            )}
            <button onClick={() => handleDeleteItem(item.value)}>Borrar</button>
            <button onClick={() => handleEditItem(item.value)}>Editar</button>
          </li>          
          </>

        ))}
      </ul>
    </div>
  );
}

export default Form