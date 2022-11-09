import Title from "./Title";

const Header = ({ pageTitle }) => {
  return <Title title={pageTitle.toUpperCase()} />;
};

export default Header;
