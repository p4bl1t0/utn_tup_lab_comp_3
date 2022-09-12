import React from "react";
import Title from "./Title";
import "./Style.css";

const Header = ({ pageTitle }) => {
  return (
    <>
      <div className="titleHeader">
        <Title title={pageTitle} />
      </div>
    </>
  );
};

export default Header;
