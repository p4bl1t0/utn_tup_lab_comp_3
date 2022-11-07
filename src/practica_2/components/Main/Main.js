import BlogPost from "../BlogPost/BlogPost";
import Body from "../Body/Body";
import '../Main/Main.css'

const Main = ({ body, links }) => {
  return (
    <main>
      <div className="main-text">
        <Body body={body} />
      </div>
      <BlogPost/>
      <nav>
        <h2>Links:</h2>
        <ul>
          {links.map((links) => (
            <li>
              <a href={links.Link}>{links.Page}</a>
            </li>
          ))}
        </ul>
      </nav>
      <section>
        <h2>Frase a elección del alumno:</h2>
        <p>
          "La vida es como una caja de chocolates, nunca sabes lo que te va a tocar."
        </p>
      </section>
    </main>
  );
};

export default Main;
