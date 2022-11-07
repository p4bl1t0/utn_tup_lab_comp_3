import Body from "./Body";
import React from "react";
import BlogPost from "./BlogPost";
import "./Main.css";

const links = [
  {
    site: "https://github.com/Ignacioff56",
    name: "Github",
  },
  {
    site: "https://www.youtube.com/",
    name: "Yutubi",
  },
];

const Main = ({ body }) => {
  return (
    <div className="Main">
      <h2>Ignacio Fernandez Faustino</h2>
      <ul>
        {links.map((link) => (
          <li>
            <a href={link.site}>{link.name}</a>
          </li>
        ))}
      </ul>
      <div className="Main_Body">
        <Body body={body} />
      </div>
      <BlogPost />
    </div>
  );
};

//<li key={index}>{item}</li>
export default Main;
