import "./Main.css";

import Body from "./Body";
import BlogPost from "../BlogPost/BlogPost";

const Main = ({ body, links }) => {
  return (
    <>
      <Body className="body-style" body={body} />
      <nav>
        <ul>
          {(links || []).map((item) => (
            <li>
              <a href={item}>{item}</a>
            </li>
          ))}
        </ul>
      </nav>
      <BlogPost
        title="Cómo saber si los juguetes sonoros pueden perjudicar la salud auditiva de los chicos"
        body="Los ruidos por encima de los 80 decibles pueden causar daño permanente en la audición tanto en niños como en adultos; recomendaciones para tener en cuenta a la hora de comprar un regalo."
      />
      <h3>Fin de la sección</h3>
    </>
  );
};

export default Main;
