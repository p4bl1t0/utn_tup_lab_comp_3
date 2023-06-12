import React from 'react'

const Button = ({Action, Name}) => {
  return (
    <button onClick={Action} >{Name}</button>
  )
}

export default Button