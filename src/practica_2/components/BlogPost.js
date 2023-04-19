import Body from "./Body"
import Title from "./Title"


const BlogPost = ({title, body}) => {
     

  return (
    <div>
      <Title title= {title}/>
      <Body body = {body} />
    </div>
  )
}

export default BlogPost
