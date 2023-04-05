import Title from "./Title";
const Header = ({ items }) => {
  return (
    <>
      <Title title={items.pageTitle.toUpperCase()} />
    </>
  );
};

export default Header;
