const InputOne = ({ saveInputValue, inputOneValue }) => {
    return (
      <div>
        <label htmlFor="input1">Entrada 1: </label>
        <input type="number" id="input1" onChange={saveInputValue} value={inputOneValue}/>
      </div>
    );
  };
  
  export default InputOne;