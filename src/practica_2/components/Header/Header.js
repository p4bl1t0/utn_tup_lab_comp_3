import Title from "../Title";

import "./Header.css";
const Header = ({ title }) => {
  return (
    <div className="header">
      <Title title={title} />
    </div>
  );
};

export default Header;
