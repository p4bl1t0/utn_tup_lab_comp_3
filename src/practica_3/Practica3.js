import { useState } from "react"
const Practica3 = () => {
  const[array, settArray] = useState([]);
  const[inputValue, setInputValue] = useState("");
  const [CleanInput, setCleanInput] = useState();
  const inputChangeHandler = (event) =>{
    setInputValue(event.target.value);
    setCleanInput()
  }
  
  const addValueHandler = () =>{
    if(inputValue.length !== 0){
      
      if(Number.isInteger(parseInt(inputValue))){
        const numberRound = Math.round(parseInt(inputValue));
        
        if(numberRound % 2 === 0){   
          settArray(array.concat(numberRound + ':  Par'));
        }
          else{
            settArray(array.concat(numberRound + ':  Impar'));
          }
      }else{
        settArray(array.concat(inputValue + ':  No es un numero'));      
      } 
    } 
    else{
      console.log('NO SE PUEDE VACIO, PONE ALGO!!!!!');
    }
    setCleanInput('');
    setInputValue('');
  }
  const deleteInputHandler = (index) =>{
    const copyArray = [...array];
    copyArray.splice(index, 1);
    settArray(copyArray);
  }
  const changeInputHandler = (index) =>{
    const copyArray = [...array];
    copyArray[index] = inputValue;
    if (inputValue.length > 0) {
      settArray(copyArray);
    }else{
      console.log('NO SE PUEDE VACIO, PONE ALGO!!!!!');
    }
  }
  
  return (
    <>
      <label>Ingresar Valor para el arreglo</label>
      <br /> 
      <input type ='text'onChange={inputChangeHandler} value={CleanInput}></input>
      <button onClick={addValueHandler}>Ingresar</button><br></br>
      <button onClick={() => deleteInputHandler(0)}>Borrar 1</button>
      <button onClick={() => changeInputHandler(0)}>Cambiar Dato 1</button>
      <ul> 
       {array.map((item, index) =>( 
            <li> 
              {item}
              <button onClick={() => deleteInputHandler(index)}>Borrar</button>
              <button onClick={() => changeInputHandler(index)}>Cambiar Dato</button>
            </li>))}
      
      </ul>
    </>
  )
}

export default Practica3;