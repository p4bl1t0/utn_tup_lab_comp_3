import Body from "./Body";
import BlogPost from "./BlogPost";
const Main = ({ items, pages }) => {
  return (
    <>
      <nav>
        <ul>
          {pages.map((link) => {
            return (
              <li key={link.id}>
                <a target="_blank" rel="noreferrer" href={link.url}>
                  {link.url}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
      <h2>I wish 2 things: a developer job, and improve my knowledge.</h2>
      <Body body={items.pageBody} />
      <BlogPost />
    </>
  );
};

export default Main;
