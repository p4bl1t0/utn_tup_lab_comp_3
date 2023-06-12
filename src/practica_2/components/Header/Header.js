import Title from "../Title/Title"
import "./Header.css"

const Header = ({pageTitle}) => {
  return (
    <div className="pageTitle">
        <Title title = {pageTitle}/>
    </div>
  )
}

export default Header