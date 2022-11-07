import React from 'react'
import Body from '../Body/Body'
import Title from '../Title/Title'

const BlogPost = () => {
    const title = "El super titulo que esperabas"
    const body = "El super cuerpo que esperabas"
  return (
    <div>
        <Title title={title} />
        <Body body={body} />
    </div>
  )
}

export default BlogPost