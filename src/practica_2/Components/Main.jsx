import BlogPost from "./BlogPost";
import Body from "./Body";

const Main = ({ pageBody, pageTitle }) => {
  pageBody = "Aguante boquita";
  return (
    <div className="container">
      <div className="list-item">
        <Body pageBody={pageBody} />
      </div>
      <BlogPost pageBody={pageBody} pageTitle={pageTitle} />
      <nav>
        <ul>
          <li >
            <a  className="list-item "href="http:www.facebook.com">Facebook</a>
          </li>
          <li >
            <a className="list-item " href="http:www.google.com">Google</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Main;
