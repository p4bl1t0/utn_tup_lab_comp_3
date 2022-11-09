import BlogPost from "./BlogPost";
import Body from "./Body";

import "./Main.css";

const Main = ({ links }) => {
  return (
    <div>
      <nav>
        <ul>
          {(links || []).map((item, index) => (
            <li key={index}>
              <a href={item} target="_blank" rel="noreferrer">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="body-container">
        <Body body={"Vaaaaamo ñiuuuuubeeeeeeeel"} />
      </div>
      <BlogPost />
    </div>
  );
};

export default Main;
