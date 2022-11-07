import React from "react";
import Title from "./Title";
import "./Header.css";

const Header = ({ title }) => {
  return (
    <div className="Header">
      <Title title={title} />
    </div>
  );
};

export default Header;
