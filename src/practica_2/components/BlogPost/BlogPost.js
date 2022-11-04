import Title from "../Title";
import Body from "../Body";


const BlogPost = ({ title, body }) => {
  return (
    <>
        <Title title={title} />
        <Body body={body} />
    </>
  )
}

export default BlogPost;