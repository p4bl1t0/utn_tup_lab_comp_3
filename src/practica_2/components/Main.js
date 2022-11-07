import BlogPost from "./BlogPost";
import Body from "./Body";
import "./styles.css";

export default function Main({ pageBody }) {
  return (
    <>
      <nav>
        <ul>
          <li>
            <a href="https://www.google.com.ar" target="_blank">
              Google
            </a>
          </li>

          <li>
            <a href="https://www.youtube.com" target="_blank">
              YouTube
            </a>
          </li>
        </ul>
      </nav>

      <div>
        <p className="pepito">Texto añadido por el alumno.</p>
      </div>
      <div className="titulo-main">
        <Body body={pageBody} />
      </div>
      <BlogPost />
      <footer className="footer">
        <p>Todos los derechos e izquierdos reservados.</p>
      </footer>
    </>
  );
}
