import Title from "../Header/Title";
import Body from "../Main/Body";

const BlogPost = ({ title, body }) => {
  return (
    <>
      <Title title={title} />
      <Body body={body} />
    </>
  );
};

export default BlogPost;
