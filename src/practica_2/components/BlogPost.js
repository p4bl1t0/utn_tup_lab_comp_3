import React from 'react'
import Title from './Title'
import Body from './Body'
const title="OpenAI pagará a la gente que encuentre errores en sus servicios, como ChatGPT";
const body="Nueva York, 12 abr. La compañía de investigación de inteligencia artificial (IA) OpenAI anunció este miércoles que dará recompensas económicas de entre 200 y 20.000 dólares a aquellos que reporten errores en los servicios que ofrece la empresa, entre ellos su chatbot con IA ChatGPT.";

const BlogPost = () => {
  return (
    <div>
        <Title title={title}/>
        <Body body={body}/>
    </div>
  )
}

export default BlogPost