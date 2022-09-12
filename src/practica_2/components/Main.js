import React from 'react'
import BlogPost from './BlogPost';
import Body from './Body';
import './StylesGeneral.css'

const Main = ({pageBody,links,pageTitle}) => {
  
    return (
        <>
        <nav>
            <ul>
                {(links || []).map((item)=> <li> <a href={item}> {item} </a> </li>)}
            </ul>
        </nav>
        <div className='bodyMain'>
            <Body body={pageBody}/>
        </div>
        <BlogPost body={"cuerpo de noticia hardcodeado"} title={"go to switch"}/>
        <p>All you people in the house<br></br>Get up and scream and shout<br></br>Say hey hey hey</p>    
        </>
    )
}

export default Main;