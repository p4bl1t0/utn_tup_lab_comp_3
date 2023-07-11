import React from 'react'
import { Title } from './Title'

export const Header = ({pageTitle}) => {
  return (
    <div>
        <Title pageTitle={pageTitle}/>
    </div>
  )
}
