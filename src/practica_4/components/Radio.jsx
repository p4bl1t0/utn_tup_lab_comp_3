import React from 'react'

const Radio = ({radio, setRadio}) => {

    const inputRadio = (e) => {
        if (e.target.checked) {
          setRadio(1)
        } else {
          setRadio(0);
        }
      };


  return (
    <div>
      <input type="radio" value={radio} onChange={inputRadio}/> 
    </div>
  )
}

export default Radio