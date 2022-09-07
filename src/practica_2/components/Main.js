import React from 'react'
import BlogPost from './BlogPost';
import Body from './Body'

function Main({pageBody,links}) {
  return (
    <div>
        <nav>
            <ul>
                {(links || []).map((item , index) => (
                    <li key={index}>
                        <a href={item}>{item}</a>
                    </li>
                ))}
            </ul>
        </nav>
        <footer>
            <p>Sitio creado para la practica de LAB III</p>
        </footer>
        <div className='body-page'>
            <Body body={pageBody}/>
        </div>
        <BlogPost/>
    </div>
  )
}

export default Main;