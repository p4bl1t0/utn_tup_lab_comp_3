import { useState } from "react"
const AddArray = () => {
  const[array, settArray] = useState([]);
  const[inputValue, setInputValue] = useState("");
  const[showmensaje, setShowMensaje] = useState('');
  const[showText, setShowText] = useState('');

  const inputChangeHandler = (event) =>{
    setInputValue(event.target.value);
  }
  
  const addValueHandler = () =>{
    if(inputValue.length !== 0){
      
      if(Number.isInteger(parseInt(inputValue))){
        const numberRound = Math.round(parseInt(inputValue));
        settArray(array.concat(numberRound));
        if(numberRound % 2 === 0){   
          setShowMensaje('Es par');
        }
          else{
            setShowMensaje('Es impar');
          }
      }else{
        settArray(array.concat(inputValue));
        setShowText(inputValue);
      } 
    } 
    else{
      console.log('NO SE PUEDE VACIO, PONE ALGO!!!!!');
    }
  }
  const deleteInputHandler = () =>{
    console.log('clicked');
    const copyArray = [...array];
    copyArray.pop();
    settArray(copyArray);
  }
  const changeInputHandler = () =>{
    const copyArray = [...array];
    const arrayModify= copyArray[copyArray.length -1] = inputValue;
    console.log(arrayModify);
    settArray(copyArray);
  }
  return (
    <>
      <label>Ingresar Valor para el arreglo</label>
      <br /> 
      <input type ='text'onChange={inputChangeHandler}></input>
      <button onClick={addValueHandler}>Enviar</button>
      <ul> 
        
        <li>Agregaste un numero:{showmensaje}</li>
        <li>Agregaste el texto</li>
        <input type="text" disabled value={showText}></input>
      </ul>
      <button onClick={deleteInputHandler}>Borrar</button>
      <button onClick={changeInputHandler}>Cambiar Dato</button>
      <p>Arreglo:{array}</p>
    </>
  )
}

export default AddArray