import { useState } from "react"

const Input1 = () => {

    const [valueInput, setValueInput] = useState(Math.round(Math.random()))
    
    const valueInputHandler = (event) =>{
    //Forma larga
     /*    if(parseInt(event.target.value) === 1 || parseInt(event.target.value) === 0 ){
            setValueInput(event.target.value);
            console.log("bien");
        }else{
            console.log("mal");
            setValueInput(0);
        } */
      //Forma corta 

      setValueInput( parseInt(event.target.value) === 1 || parseInt(event.target.value) === 0  ? event.target.value: 0 );   
    }
    console.log("Valor seteado del input:", valueInput);
  return (
    <div>
    <label for="input1">Entrada 1:</label>
    <input type="number" id="input1" onChange={valueInputHandler} />
    </div>
  )
}

export default Input1