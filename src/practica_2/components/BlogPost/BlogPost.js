import Body from "../Body";
import Title from "../Title";

import "./BlogPost.css"

const BlogPost = () => {
    const titleNotice ="Este es un titulo de una noticia random";
    const bodyNotice="Este es el cuerpo de una noticia random";
    return (
    <div className="BlogPost">
      <Title title={titleNotice}/>
      <Body body={bodyNotice}/>
    </div>
  );
};

export default BlogPost;
