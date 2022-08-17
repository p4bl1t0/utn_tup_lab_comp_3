import React from 'react'
import Title from './Title';
import Body from './Body';


const BlogPost = ({title,body})=>{
  return (

    <div>
        <Title title={title}/>
        <Body body={body}/>    
    </div>
  
    )
}

export default BlogPost;