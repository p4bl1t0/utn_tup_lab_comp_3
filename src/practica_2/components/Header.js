import React from 'react'
import Title from './Title'

const Header = ({pageTitle}) => {
  return (
    <div>
        <Title pageTitle={pageTitle}/>
    </div>
  )
}

export default Header