import BlogPost from "../BlogPost/BlogPost";
import Body from "../Body";

import "./Main.css";

const Main = ({ body, pages }) => {
  const mapedLinks = pages.map((item) => (
    <ul>
      <a href={item.link}>{item.title}</a>
    </ul>
  ));

  return (
    <>
      <Body className="bodyMainStyle" body={body} />
      <BlogPost />
      <nav>{mapedLinks}</nav>
      <footer>Gaston Bortoli</footer>
    </>
  );
};

export default Main;
