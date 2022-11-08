import Body from "./Body";
import BlogPost from "./BlogPost";

const Main = ({ body, links }) => {
  const variosLinks = Object.keys(links).map((key) => (
    <li>
      <a href={links[key]}>{key}</a>
    </li>
  ));
  return (
    <div className="main-style">
      <Body body={body.toUpperCase()} />
      <nav>
        <ul>{variosLinks}</ul>
      </nav>
      <p>Que linda esta quedando esta página!</p>
      <BlogPost />
    </div>
  );
};

export default Main;
