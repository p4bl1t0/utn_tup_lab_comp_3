import React from "react";
import BlogPost from "./BlogPost";
import Body from "./Body";

const Main = ({ pageBody, link1, link2 }) => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <a href={link1}>{link1}</a>
          </li>
          <li>
            <a href={link2}>{link2}</a>
          </li>
        </ul>
      </nav>
      <div className="body-change">
        <Body body={pageBody.toUpperCase()} />
      </div>
      <BlogPost />
      <p>Realizando las practicas de Laboratorio III</p>
    </div>
  );
};

export default Main;
