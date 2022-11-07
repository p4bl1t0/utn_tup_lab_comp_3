import React from 'react'

const Checkbox = ({checkboxHandler}) => {
  return (
    <>
        <input type="checkbox" onChange={checkboxHandler}/>
    </>
  )
}

export default Checkbox