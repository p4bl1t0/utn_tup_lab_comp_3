import Title from "./Title";

const Header = ({pageTitle}) => {
  return (
    <div className="container">
      <Title pageTitle={pageTitle} />
    </div>
  );
};
export default Header;
