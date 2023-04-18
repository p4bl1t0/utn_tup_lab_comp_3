import Page from "./Page"
import Body from "./Body"
import BlogPost from "./BlogPost"

const Main = ({pageBody , youTube, twitchTv }) => {

    

  return (
    <div>
      <Page>

        <Body pageBody = {pageBody}/>

        <BlogPost />

        <nav>
            <ul> {youTube} </ul>
            <ul> {twitchTv} </ul>
        </nav>
        <h1>consultar dudas sobre children</h1>
      </Page>
    </div>
  )
}

export default Main
