import BlogPost from "./BlogPost";
import Body from "./Body";

const Main = ({ pageBody, pageTitle }) => {
  pageBody = "Aguante boquita";
  return (
    <div>
      <div style={{ textTransform: "uppercase" }}>
        <Body pageBody={pageBody} />
      </div>
      <BlogPost pageBody={pageBody} pageTitle={pageTitle} />
      <nav>
        <ul>
          <li>
            <a href="http:www.facebook.com">Facebook</a>
          </li>
          <li>
            <a href="http:www.google.com">Google</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Main;
