import "./Header.css"

import Title from "./Title";

const Header = ({ pageTitle }) => {
  return <Title className="title-style" title={pageTitle} />;
};

export default Header;
