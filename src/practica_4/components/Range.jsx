import React from 'react'

const Range = ({range, setRange}) => {

    const inputRange = (e) => {
        if (e.target.value == 1) {
          setRange(1)
        } else {
          setRange(0);
        }
      };

  return (
    <div>
        <input type="range" min="0" max="1"   value={range} onChange={inputRange}/> 
    </div>
  )
}

export default Range