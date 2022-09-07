import React from 'react'
import Title from './Title'

function Header({pageTitle}) {
  return (
    <Title title={pageTitle.toUpperCase()} className = {'title-color'}/>
  )
}

export default Header;