import Body from "../Body/Body";

const Main = ({pageBody}) => {
  return (
    <>
      <Body pageBody={pageBody} />
      <nav>
        <ul><a href="https://www.youtube.com/">Youtube</a></ul>
        <ul><a href="https://www.facebook.com/">Facebook</a></ul>
      </nav>
    </>
  );
};

export default Main;
