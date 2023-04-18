import Page from "./Page"
import Title from "./Title"

const Header = ({pageTitle}) => {
  return (
  <div>
    <Page>

      <Title pageTitle = {pageTitle} />
  
    </Page>
  </div>  
    )
}

export default Header
