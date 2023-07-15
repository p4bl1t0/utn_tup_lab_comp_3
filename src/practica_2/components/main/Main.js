import Body from "../body/Body"
import BlogPost from "../blogPost/BlogPost";
const Main = ({pageBody,frase, links}) => {
  return (
    <>
      <Body Body={pageBody} links={links} />
      <BlogPost />   
      {frase}
    </>
  );
};
export default Main;