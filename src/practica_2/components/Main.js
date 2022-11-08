import Body from "./Body"
import BlogPost from "./BlogPost";



const Main = ({body, links}) => {
  const variosLinks = Object.keys(links).map((key) => (
    <li>
      <a href={links[key]}>{key}</a>
    </li>
  ));

  return (
    <div>
        <nav>
          <ul>
            {variosLinks}
          </ul>
        </nav>
        <p>Laboratorio de computacion III</p>
        <div className="bodyMain"><Body body={body.toUpperCase()}/></div>
        <BlogPost/>
    </div>
  )
}

export default Main