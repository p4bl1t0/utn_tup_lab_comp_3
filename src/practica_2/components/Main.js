import Body from "./Body";


    const Main = (pageBody,links) => {
        return (
            <>
              <Body pageBody={pageBody}/>
              <nav>
                <ul>
                  <li><a href= {links[1]}></a></li>
                  <li><a href= {links[0]}></a></li>
                </ul>
              </nav>
            </>
          );

    }
    
export default Main;