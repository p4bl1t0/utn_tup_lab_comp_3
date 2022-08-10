import Body from "./Body";

const Main = ({ pageBody, links }) => {
  return (
    <>
      <Body pageBody={pageBody} />
      <nav>
        <ul>
          {links.map((item) => (
            <li><a href={item}>{item}</a></li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Main;
