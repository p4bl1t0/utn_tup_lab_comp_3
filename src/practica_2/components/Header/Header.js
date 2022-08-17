import Title from "./Title";

const Header = ({ pageTitle }) => {
  pageTitle = pageTitle.toUpperCase();
  return <Title title={pageTitle} />;
};

export default Header;
