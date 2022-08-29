import BlogPost from "./BlogPost";
import Body from "./Body";

const Main = ({ pageBody, links }) => {
  return (
    <div>
      <nav>
        <ul>
          {(links || []).map((item, index) => (
            <li key={index}>
              <a href={item}>{item} </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="body-page">
        <Body body={pageBody} />
      </div>

      <BlogPost />
      <footer>
        <p>Practica Lab de computación III</p>
      </footer>
    </div>
  );
};

export default Main;
