import React from 'react'
import BlogPost from './BlogPost';
import Body from './Body';
import './StylesGeneral.css'

const Main = ({pageBody,links}) => {
  
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
        <BlogPost body={"accidente en la ruta 012 provoca corte de la circulación de vehiculos desde las 09:00 am"} title={"Trafico atascado en la O12"}/>
        <p>All you people in the house<br></br>Get up and scream and shout<br></br>Say hey hey hey</p>    
        </>
    )
}

export default Main;