import React,{useState} from 'react'
import Numbers from './Numbers';

const Input = () => {

    const [input, setInput] = useState('');
    const [addArray,setAddArray] = useState([]);

    const ArrayAdded = () => {
        if (input !== ''){
            setAddArray([...addArray,input]);
            setInput("");
        }
    };

    const deleteItem = (index) =>{
        let backUp = [...addArray]
        backUp.splice(index,1)
        setAddArray(backUp)   
    }

    /*const editItem = (index) =>{
        let backUp = [...addArray]
        backUp[index] =                         FALTA AÑADIR LA FUNCIONALIDAD DE EDICION
        setAddArray(backUp)
    }*/
   

  return (
    <>
        <p>Ingrese un texto:</p>
        <input type='text' placeholder='Buscar' onChange={ event => setInput(event.target.value) } value = {input}/>
        <button type='submit' onClick={ArrayAdded}>Enviar</button>
        <Numbers
            deleteItem = {deleteItem}
            addArray = {addArray}
        />
    </>
  )
}

export default Input;