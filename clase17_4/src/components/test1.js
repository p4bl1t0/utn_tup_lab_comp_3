import React from 'react'

const Test1 = (props) => {
  return (
    <div className='testcss'>
        <h2> Name:{props.name}</h2>
        <h2 className='green'> Age:{props.age}</h2>
        <h2> Phone number: {props.phone} </h2>
    </div>
  )
}

export default Test1