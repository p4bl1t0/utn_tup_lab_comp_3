import React from 'react'
import Title from './Title'
import '../CSS/header.css'


const Header = ({pageTitle}) => {
  return (
    <>
    <div className='headerPages'>        
      <Title title={pageTitle}/>
    </div>
    </>
  )
}

export default Header