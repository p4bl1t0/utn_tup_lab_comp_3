import React from 'react'
import Body from './Body'

const Main = ({pageBody, links}) => {
  return (
    <div>
        <Body pageBody={pageBody}/>
        <nav>
            <ul>
                <li><a href={links[0]} target='blank'>Mi repositorio git</a></li>
                <li><a href={links[1]} target='blank'>Instagram</a></li>
            </ul>
        </nav>
        <p>Happy hacking</p>
    </div>
  )
}

export default Main