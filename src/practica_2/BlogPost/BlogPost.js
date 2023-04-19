import Title from "../components/Title/Title"
import Body from "../components/Body/Body"
const BlogPost = ({title, body}) => {
  return (
    <div>
        <Title title = {title} />
        <Body body = {body} />
    </div>
  )
}

export default BlogPost