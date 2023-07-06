import React from 'react'

const Inputs = ( { input1, setInput1, checkboxValue, setCheckboxValue } ) => {

    const changeInputHandler = (event) => {
        if(Number(event.target.value) !== 1) {
            setInput1(0)
        } else {
            setInput1(1)
        }
    };

    const checkboxHandler = (event) => {
        setCheckboxValue(Number(!checkboxValue))
    };

  return (
    <div>
        <div>
                <label for="input1">Entrada 1:</label>
                <input
                    type="number" 
                    id="input1" 
                    value={input1} 
                    onChange={changeInputHandler} 
                />
            </div>
            <div>
                <label>            
                    Entrada 2: 
                    <input
                        type="checkbox" 
                        checked={checkboxValue}
                        onChange={checkboxHandler} 
                    />         
                </label>
            </div>
    </div>
  )
}

export default Inputs