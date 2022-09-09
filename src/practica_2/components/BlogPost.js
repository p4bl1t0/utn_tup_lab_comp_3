import React from "react";
import Title from "./Title";
import Body from "./Body";

const BlogPost = ({}) => {
  return (
    <div className="blog-post">
      <Title title="YouTube agrega la sección de podcasts en su plataforma" />
      <Body body="Por el momento, la nueva característica solo está disponible para algunos usuarios" />
    </div>
  );
};

export default BlogPost;
