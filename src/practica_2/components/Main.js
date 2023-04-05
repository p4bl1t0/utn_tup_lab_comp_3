import Body from "./Body";

const Main = ({ items, sites }) => {
  return (
    <>
      <nav>
        <ul>
          {sites.map((url) => {
            return (
              <li>
                <h1>hola</h1>
              </li>
            );
          })}

          <li></li>
        </ul>
      </nav>
      <Body pageBody={items.pageBody} />
    </>
  );
};

export default Main;
