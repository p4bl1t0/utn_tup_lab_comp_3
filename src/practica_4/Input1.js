import React, { useState } from 'react'


const Input1 = ({input, changeValueInput }) => {


    return (
        <div><div>
            <label for="input1">Entrada 1:</label>
            <input type="number" id="input1" value={input} onChange={changeValueInput} />
        </div></div>
    )
}

export default Input1