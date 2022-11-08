

const CheckBox = ({ setEnteredCheck, enteredCheck}) => {
   
    
    const checkboxHandler = (event) => {
        event.target.checked ? setEnteredCheck(1) : setEnteredCheck(0)
        console.log("valorCheck:", enteredCheck)
    }
    return (
    <div>
        <label>CheckBox: </label>
        <input type="checkbox" onChange={checkboxHandler} value={enteredCheck}/>
        {<div>{enteredCheck}</div>}
    </div>
  )
}

export default CheckBox