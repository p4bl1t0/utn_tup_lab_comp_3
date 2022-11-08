import React, { useState } from 'react'

const Checkbox = ({checkbox, changeCheckboxValue}) => {

    return (
        <div>            <div>
            <label><input type="checkbox" value={checkbox} onChange={changeCheckboxValue} /> Entrada 2</label>
        </div></div>
    )
}

export default Checkbox