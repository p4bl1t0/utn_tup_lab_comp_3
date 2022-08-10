import React from 'react'
import Body from './Body';

const Main = ({pageBody,link1,link2}) => {
  
    return (
        <>
        <nav>
            <ul>
                <li>{link1}</li>
                <li>{link2}</li>
            </ul>
        </nav>
        <Body pageBody={pageBody}/>
        <p>All you people in the house<br></br>Get up and scream and shout<br></br>Say hey hey hey</p>    
        </>
    )
}

export default Main;