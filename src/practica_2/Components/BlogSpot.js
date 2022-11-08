import React from 'react'

import Title from "./Title";
import Body from "./Body";

 const BlogSpot = ({title,body}) => {
   return (
   <>     
     <Title propTitle={title}/>
     <Body propBody={body}/>
   </>
   )
 }
 
 export default BlogSpot