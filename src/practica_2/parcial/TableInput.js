import React from 'react'
import { useState } from "react";

const TableInput = () => {

    const [input, setInputValue] = useState("")

    const changeInputValue = (event) => {
        const input = event.target.value
        console.log(input);
        input == "4"
            ? setInputValue("Mesa correcta")
            : setInputValue("Mesa inestable")
        console.log(typeof input);
    }
    return (
        <div>
            <input type="text" value={input} onChange={changeInputValue}></input>
            <p>{input}</p>
        </div>
    )
}

export default TableInput