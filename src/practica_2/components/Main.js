import Body from "./Body";
import BlogPost from "./BlogPost";
import "./styles/_Main.css";
const Main = ({ items, pages }) => {
  return (
    <div className="shadow">
      <nav>
        <ul>
          {pages.map((link) => {
            return (
              <li key={link.id}>
                <a
                  className="link"
                  target="_blank"
                  rel="noreferrer"
                  href={link.url}
                >
                  {link.url}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
      <h2>I wish 2 things: a developer job, and improve my knowledge.</h2>
      <div className="bodyComponent">
        <Body body={items.pageBody} />
      </div>
      <BlogPost />
    </div>
  );
};

export default Main;
