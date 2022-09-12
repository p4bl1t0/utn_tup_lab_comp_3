import React from "react";
import Body from "./Body";
import BlogPost from "./BlogPost";
import "./Style.css";

const Main = ({ pageBody, links }) => {
  return (
    <>
      <nav>
        <ul>
          {links ||
            [].map((item) => (
              <li>
                {" "}
                <a href={item}> {item} </a>{" "}
              </li>
            ))}
        </ul>
      </nav>
      <div className="bodyMain">
        <Body body={pageBody} />
      </div>
      <BlogPost
        body={"Información sobre la Web3 y Cripto"}
        title={"El futuro de la Web"}
      />
      <p>Bienvenido a ETHEREUM</p>
    </>
  );
};

export default Main;
