import React from 'react'

const RadioInput = ({input3ValueHandler}) => {
  return (
    <>
      <div className='radio'>
        <label>0</label>
        <input type="radio" value='0' onChange={input3ValueHandler} name='radioValue'/>
        <label>1</label>
        <input type="radio" value='1' onChange={input3ValueHandler} name='radioValue'/>
      </div>
    </>
  )
}

export default RadioInput