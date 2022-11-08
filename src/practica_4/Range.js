import React from 'react'

const Range = ({ addRange }) => {
    return (
        <div>
            <label htmlFor="range">Entrada 1:</label>
            0<input type="range" id="range" min={0} max={1} defaultValue={0} onChange={addRange} />1
        </div>
    )
}

export default Range