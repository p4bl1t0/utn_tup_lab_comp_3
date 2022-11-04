import Title from "./Title";

import './Header.css'

const Header = ({ title }) => {
  return (
    <Title className='header-title' title={title} />
  )
}

export default Header;