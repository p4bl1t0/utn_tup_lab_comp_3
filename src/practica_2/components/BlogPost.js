import Body from "./Body"
import Title from "./Title"


const BlogPost = ({title, body}) => {
     
  const notice = {
    title: 'Argentina campeon del mundo',
    body: 'Le gano a Francia por penales'
};

  return (
    <div>
      <Title title= {notice.title}/>
      <Body body = {notice.body} />
    </div>
  )
}

export default BlogPost
