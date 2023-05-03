import "./Header.css";

import Title from "./Title";

const Header = ({ title }) => {
  return <Title className="title-style" title={title} />;
};

export default Header;
