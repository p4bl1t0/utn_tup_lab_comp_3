import Title from "./Title";
const Header = ({ items }) => {
  return (
    <>
      <Title pageTitle={items.pageTitle} />
    </>
  );
};

export default Header;
