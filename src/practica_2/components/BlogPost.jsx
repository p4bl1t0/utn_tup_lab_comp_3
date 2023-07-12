import Body from "./Body"
import Title from "./Title"


const BlogPost = () => {
     
  const notice = {
    title: 'Noticia titulo',
    body: 'Noticia body'
};

  return (
    <div>
      <Title title= {notice.title}/>
      <Body body = {notice.body} />
    </div>
  )
}

export default BlogPost