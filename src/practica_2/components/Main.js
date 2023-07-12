import React from 'react'
import Body from './Body'
import BlogPost from './BlogPost'
import '../CSS/main.css'


const Main = ({pageBody,links}) => {
  return (
    <div>
        <div className='bodySite'>
          <Body body={pageBody}/>
        </div>
        <BlogPost/>
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