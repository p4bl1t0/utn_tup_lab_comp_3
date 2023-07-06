import Page from "./Page"
import Body from "./Body"
import BlogPost from "./BlogPost"

const Main = ({body , youTube, twitchTv }) => {

    

  return (
    <div>
      
      <Page>

        <Body body = {body}/>

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
