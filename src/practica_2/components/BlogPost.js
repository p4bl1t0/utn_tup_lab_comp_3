import React from 'react'
import Body from './Body'
import Title from './Title'

const BlogPost = ({title, body}) => {
    return (
        <div>
            <Title title={'Una fusión da lugar a la comunidad de programadores más grande de Latinoamérica'}/>
            <Body body={'Es por la combinación de Digital House y Rocketseat, dos de las mayores organizaciones dedicadas a la formación en programación de América Latina.'}/>
        </div>
    )
}

export default BlogPost