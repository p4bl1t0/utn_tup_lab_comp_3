import Body from "../Body/Body";

const Main = ({ pageBody, links }) => {
  return (
    <div>
      <Body pageBody={pageBody} />
      <nav>
        <ul>
          {links.map((links) => (
            <li key={links.id}>
              <a href={links.link}>{links.page}</a>
            </li>
          ))}
        </ul>
      </nav>
      <section>
        <h3>Frase Motivadora:</h3>
        <p>La oportunidad reluce allí donde se ha renunciado a la responsabilidad</p>
      </section>
    </div>
  );
};

export default Main;
