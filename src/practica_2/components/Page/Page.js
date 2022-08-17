import Main from "../Main/Main";
import Header from "../Header/Header";

const Page = ({ pageTitle, pageBody, links}) => {
    return (
        <div>
            <Header pageTitle={pageTitle}/>
            <Main pageBody={pageBody} links={links}/>
        </div>
    )
}

export default Page