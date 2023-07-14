import React from "react";
import Body from "./Body";
import BlogPost from "./BlogPost";

const Main = ({ pageBody, pageTitle  }) => {
  return (
    <div>
      <Body pageBody={pageBody} />
      <div>
      <BlogPost pageBody={pageBody} pageTitle={pageTitle} />
      </div>
      <div>
        <div>
          <nav>
            <ul>
            <li >
            <a  className="list-item "href="http:www.facebook.com">Facebook</a>
          </li>
          <li >
            <a className="list-item " href="https://www.youtube.com/">Youtube</a>
          </li>
            </ul>
          </nav>
        </div>
      </div>
      <p>LLega el fin de semanaaaaa</p>
    </div>
  );
};

export default Main;
