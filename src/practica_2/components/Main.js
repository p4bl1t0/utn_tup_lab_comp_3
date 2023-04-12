import Body from "./Body"

const Main = ({pageBody , youTube, twitchTv }) => {

    

  return (
    <div>
        <Body pageBody = {pageBody} />
        <nav>
            <ul> {youTube} </ul>
            <ul> {twitchTv} </ul>
        </nav>
    </div>
  )
}

export default Main
