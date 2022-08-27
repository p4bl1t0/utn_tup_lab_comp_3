import Title from "../Header/Title";
import Body from "../Main/Body";

const BlogPost = ({ title, body }) => {
  return (
    <div>
      <Title title={title} />
      <Body body={body} />
    </div>
  );
};

export default BlogPost;
