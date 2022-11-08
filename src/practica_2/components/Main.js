import BlogPost from "./BlogPost";
import Body from "./Body";
import "./styles.css";

export default function Main({ pageBody }) {
  const links = ["https://www.google.com.ar", "https://www.youtube.com"];

  return (
    <>
      <div className="titulo-main">
        <Body body={pageBody} />
      </div>

      <nav className="nav">
        <ul>
          {links.map((item, index) => (
            <li key={index}>
              <a href={item} target="_blank">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div>
        <p className="pepito">Texto añadido por el alumno.</p>
      </div>
      <BlogPost />
      <footer className="footer">
        <p>Todos los derechos e izquierdos reservados.</p>
      </footer>
    </>
  );
}
