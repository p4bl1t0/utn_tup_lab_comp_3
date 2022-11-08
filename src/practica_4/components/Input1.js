
//Refactorizar `input1` y `checkbox` como componentes apartes, capturar su cambio de valor y pasarselo al componente `LogicGates` para su cálculo.
const Input1 = ({setEnteredInput, enteredInput}) => {
    
    const inputHandler = (event) => {
        let valorIngresado = event.target.value
        valorIngresado === "1" ? setEnteredInput(1) : setEnteredInput(0);
        
        console.log("valorIngresado:", valorIngresado);
    }
  return (
    <div>
        <label>Elija un valor: </label>
        <input onChange={inputHandler} min='0' max='1' type="number"value={enteredInput}/>
    </div>
  )
}

export default Input1