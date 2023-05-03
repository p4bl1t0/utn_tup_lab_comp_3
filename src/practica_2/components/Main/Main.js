import React from "react";

import "./Main.css";

import Body from "./Body";
import BlogPost from "../BlogPost/BlogPost";

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
        title="Why are cats so special?"
        body="A cat has the ability to both calm your nervous system and provide an immediate outlet for fun and play. Although cats are independent animals who like to scavenge and explore on their own terms, they are also very affectionate with their owners and people they trust.."
      />
      <h3>End of the section</h3>
    </>
  );
};

export default Main;
