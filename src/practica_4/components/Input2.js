import React from 'react'
import  { useState } from 'react';
const Input2 = ({ setCheckbox }) => {
    const handleChange = (e) => {
      const value = e.target.checked ? 1 : 0;
      setCheckbox(value);
    };
  
    return (
      <div>
        <label>
          <input type="checkbox" onChange={handleChange} />
          Input 2
        </label>
      </div>
    );
  };
  

export default Input2;