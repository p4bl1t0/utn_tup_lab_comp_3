import React from 'react'
import { useState } from 'react'

const Check = ({checkBox1, setCheckBox1}) => {

    

    const checkHandler = (e) => {
        if (e.target.checked) {
          setCheckBox1(1);
        } else {
          setCheckBox1(0);
        }
      };

  return (
    <div>
      <div>
        <label htmlFor='checkBox1'>
          <input type="checkbox" value={checkBox1} onChange={checkHandler} />{" "}
          Entrada 2
        </label>
      </div>
    </div>
  )
}

export default Check