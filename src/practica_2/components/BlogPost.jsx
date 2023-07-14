import React from 'react'
import Body from "./Body"
import Title from "./Title"


const BlogPost = ({pageTitle, pageBody}) => {
  return (
    <div>
      <Title pageTitle={pageTitle}/>
      <Body pageBody={pageBody}/>
    </div>
  );
}

export default BlogPost