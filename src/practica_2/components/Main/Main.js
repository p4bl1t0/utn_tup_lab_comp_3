import Body from "../Body/Body";

const Main = ({ pageBody, links }) => {
  return (
    <main>
      <Body pageBody={pageBody} />
      <nav>
        <ul>
          {links.map((links) => (
            <li>
              <a href={links.Link}>{links.Page}</a>
            </li>
          ))}
        </ul>
      </nav>
    </main>
  );
};

export default Main;
