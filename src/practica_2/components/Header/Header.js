import Title from "../Title/Title";
import '../Header/Header.css'

const Header = ({ title }) => {
  return (
    <header>
      <Title title={title} />
    </header>
  );
};

export default Header;
