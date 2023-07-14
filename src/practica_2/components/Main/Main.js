import React from "react";

import "./Main.css";

import Body from "./Body";
import BlogPost from "../Blogpost/Blogpost";

const Main = ({ body, links }) => {
  return (
    <>
      <Body className="body-style" body={body} />
      <nav>
        <ul>
          {React.Children.toArray(
            (links || []).map((item) => (
              <li>
                <a href={item}>{item}</a>
              </li>
            ))
          )}
        </ul>
      </nav>
      <BlogPost
        title="Frase tipica de facebook"
        body="Tipico: Te pones los audífonos y a todo el mundo le da por hablarte"
      />
    </>
  );
};

export default Main;
