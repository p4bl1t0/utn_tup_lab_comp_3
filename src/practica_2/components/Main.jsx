import React from "react";
import Body from "./Body";

const Main = ({ pageBody, linkFace, linkYoutube }) => {
  return (
    <div>
      <Body pageBody={pageBody} />
      <nav>
        <ul>
          <a href={linkFace}>Facebook</a>
        </ul>
        <ul>
          <a href={linkYoutube}>Youtube</a>
        </ul>
      </nav>
      <p>LLega el fin de semanaaaaa</p>
    </div>
  );
};

export default Main;
