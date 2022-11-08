import React from 'react'
import Title from './Title'

import "./Header.css"

const Header = ({propHeader}) => {
  return (
    <Title style="title" propTitle={propHeader}/>
  )
}

export default Header