import Header from "./Header";
import Main from "./Main";

const Page = ({pageTitle,pageBody,links}) => {
  return (
    <div>
        <Header pageTitle={pageTitle}/>
        <Main pageBody={pageBody} links={links} />
    </div>
  )
}

export default Page;