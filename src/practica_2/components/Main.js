import Body from "./Body"

const Main = ({pageBody , ...links}) => {

    const youTube = links.youTube;
    const twitchTv = links.twitchTv;


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
