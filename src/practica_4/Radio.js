import React from 'react'

const Radio = ({ addRadio }) => {
  return (
    <div> <label>Entrada 2:</label>
    <div>
      <label htmlFor="radio1">0</label>
      <input
        type="radio"
        id="radio0"
        value={0}
        onChange={addRadio}
      />
    </div>
    <div>
      <label htmlFor="radio1">1</label>
      <input
        type="radio"
        id="radio1"
        value={1}
        onChange={addRadio}
      />
    </div></div>
  )
}

export default Radio