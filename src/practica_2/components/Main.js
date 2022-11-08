import React from "react";
import Body from "./Body";
import BlogPost from "./BlogPost";
import "./Style.css";

const Main = ({ pageBody, links, pageTitle }) => {
  return (
    <>
      <div className="titulo-main">
        <Body body={pageBody} />
      </div>

      <nav className="nav">
        <ul>
          {links.map((item, index) => (
            <li key={index}>
              <a href={item}>
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>

        <BlogPost 
        body={"Información sobre la Web3 y Cripto"}
        title={"El futuro de la Web"}
      />
      <p>Bienvenido a ETHEREUM</p>
    </>
  );
};

export default Main;
