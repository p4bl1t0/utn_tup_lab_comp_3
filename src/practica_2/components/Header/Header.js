import Title from "../Title/Title";

import "./header.css"

const Header = ({pageTitle}) => {
  return (
    <div className="header">
      <Title title = {pageTitle}/>
    </div>
  )
}

export default Header